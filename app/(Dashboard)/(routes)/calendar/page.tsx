"use client";

import { useEffect, useState } from 'react';
import {
  Button,
  Col,
  Row,
  Table,
  Typography,
  Modal,
  Form,
  Input,
  DatePicker,
} from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { useSnackbar } from 'notistack';
import { CalendarApi } from '@/app/api/calendar/route';
import { PageLayout } from '@/components/pagelayout';

const { Title, Text } = Typography;

type ContentType = {
  id: string;
  contentText: string;
  scheduledDate: string;
  postTime: string;
};

export default function ContentManagementPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [contents, setContents] = useState<ContentType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingContent, setEditingContent] = useState<ContentType | null>(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUserId(data.userId || 'default-user-id'))
      .catch(error => console.error('Failed to fetch userId', error));
  }, []);

  const fetchContents = async () => {
    try {
      const data = await CalendarApi.findManyByUserId(userId ?? '', {
        includes: ['user'],
      });
      setContents(data);
    } catch (error) {
      enqueueSnackbar('Failed to fetch contents', { variant: 'error' });
    }
  };

  const handleDelete = async (contentId: string) => {
    try {
      await CalendarApi.deleteOne(contentId);
      fetchContents();
      enqueueSnackbar('Content deleted successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Failed to delete content', { variant: 'error' });
    }
  };

  const showModal = (content: ContentType | null = null) => {
    setEditingContent(content);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingContent(null);
  };

  const onFinish = async (values: Partial<ContentType>) => {
    try {
      const formattedValues = {
        ...values,
        scheduledDate: dayjs(values.scheduledDate).format('YYYY-MM-DD'),
        postTime: dayjs(values.postTime).format('HH:mm:ss'),
      };
      if (editingContent) {
        await CalendarApi.updateOne(editingContent.id, formattedValues);
        enqueueSnackbar('Content updated successfully', { variant: 'success' });
      } else {
        await CalendarApi.createOneByUserId(userId ?? '', formattedValues);
        enqueueSnackbar('Content created successfully', { variant: 'success' });
      }
      fetchContents();
      setIsModalVisible(false);
      setEditingContent(null);
    } catch (error) {
      enqueueSnackbar('Failed to save content', { variant: 'error' });
    }
  };

  const columns = [
    {
      title: 'Content Text',
      dataIndex: 'contentText',
      key: 'contentText',
    },
    {
      title: 'Scheduled Date',
      dataIndex: 'scheduledDate',
      key: 'scheduledDate',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Post Time',
      dataIndex: 'postTime',
      key: 'postTime',
      render: (text: string) => dayjs(text).format('HH:mm:ss'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: ContentType) => (
        <Row gutter={16}>
          <Col>
            <Button icon={<EditOutlined />} onClick={() => showModal(record)} />
          </Col>
          <Col>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.id)}
            />
          </Col>
        </Row>
      ),
    },
  ];

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Content Management</Title>
      <Text>
        Manage and oversee all aspects of content creation, scheduling, and
        posting.
      </Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{ marginBottom: 16 }}
      >
        Add Content
      </Button>
      <Table dataSource={contents} columns={columns} rowKey="id" />
      <Modal
        title={editingContent ? 'Edit Content' : 'Add Content'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          initialValues={editingContent || undefined}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="contentText"
            label="Content Text"
            rules={[
              { required: true, message: 'Please input the content text!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="scheduledDate"
            label="Scheduled Date"
            rules={[
              { required: true, message: 'Please select the scheduled date!' },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="postTime"
            label="Post Time"
            rules={[
              { required: true, message: 'Please select the post time!' },
            ]}
          >
            <DatePicker picker="time" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </PageLayout>
  );
}
