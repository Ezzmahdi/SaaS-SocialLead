"use client";

import moment from 'moment';
import React, { useEffect, useState } from 'react'
import {
  Calendar as AntCalendar,
  Typography,
  Modal,
  Button,
  Form,
  Input,
  DatePicker,
  TimePicker,
} from 'antd'
const { Title, Text } = Typography
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { CalendarApi } from '@/app/api/calendar/route';
import { PageLayout } from '@/components/pagelayout';

import axios from 'axios';

import { getSession, signIn } from 'next-auth/react';




export default function ContentSchedulingPage() {
  const [message, setMessage] = useState('');


  const router = useRouter()
  const params = useParams<any>()
  
  const [userId, setUserId] = useState<string | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [calendars, setCalendars] = useState<any[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUserId(data.userId || 'default-user-id'))
      .catch(error => console.error('Failed to fetch userId', error));


    if (userId) {
      fetchCalendars()
    }
  }, [userId])

  const fetchCalendars = async () => {
    try {
      const calendarsFound = await CalendarApi.findManyByUserId(userId ?? '', {
        includes: ['user'],
      })
      setCalendars(calendarsFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch calendars', { variant: 'error' })
    }
  }

  const handleDateSelect = (value: any) => {
    form.setFieldsValue({ scheduledDate: value })
    setIsModalVisible(true)
  }

  interface FormValues {
    scheduledDate: Date;
    postTime: Date;
    contentText: string;
  }
  
  const handleSubmit = async (values: FormValues) => {
    try {
      // Check if user is authenticated
      const session = await getSession();
      if (!session) {
        try {
          // If not authenticated, redirect to the Facebook login page
          await signIn('facebook', { callbackUrl: '/schedule' });
        } catch (error) {
          console.error("[AUTH_ERROR]", error);
        }
      } else {
        // User is authenticated, proceed with scheduling the post
      
        // Convert scheduled date and time to ISO format
        const scheduledDateTime = new Date(`${values.scheduledDate}T${values.postTime}`).toISOString();
      
        try {
          // Store the scheduled post details in the database or storage mechanism
          const response = await axios.post('/api/schedulePost', {
            message: values.contentText,
            scheduledDateTime,
          });
        
          // Display success message
          alert('Post scheduled successfully!');
        } catch (error) {
          // Handle error
          console.error('Error scheduling post:', error);
          alert('Failed to schedule post. Please try again.');
        } finally {
          const scheduledDate = moment(values.scheduledDate).format('YYYY-MM-DD');
      const postTime = moment(values.postTime).format('HH:mm:ss');

      const newContent = await CalendarApi.createOneByUserId(userId ?? '', {
        scheduledDate,
        postTime,
        contentText: values.contentText,
        status: 'scheduled',
      });
      enqueueSnackbar('Content scheduled successfully', { variant: 'success' });
      setIsModalVisible(false);
      form.resetFields();
      fetchCalendars();
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="full-width">

      <Title className="text-3xl font-bold m-10" level={2}>Content Scheduling</Title>

      <AntCalendar onSelect={handleDateSelect} />
      <Modal
        title="Schedule Content"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item>
            <div className="flex items-center space-x-2 mt-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXBKIqMm461mJBGE_s2BHXqx7pQRF8nkhPSaU3jVBMw&s" alt="Profile" className="rounded-full w-12 h-12" />
              <img src="https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png" alt="Profile" className="rounded-full w-12 h-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Profile" className="rounded-full w-12 h-12" />
              <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714694400&semt=ais" alt="Profile" className="rounded-full w-12 h-12" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="Profile" className="rounded-full w-12 h-12" />
            </div>
          </Form.Item>
          <Form.Item name="scheduledDate" label="Scheduled Date">
            <DatePicker />
          </Form.Item>
          <Form.Item name="postTime" label="Post Time">
            <TimePicker use12Hours format="h:mm a" />
          </Form.Item>
          <Form.Item name="contentText" label="Content Text">
            <Input.TextArea rows={4} />
          </Form.Item>
          {/* <Form.Item name="contentMedia" label="Content Media" >
            <Input.TextArea rows={4} />
          </Form.Item> */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
