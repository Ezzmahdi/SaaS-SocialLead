import React from 'react';
import Chart, { ArgumentAxis, Border, CommonSeriesSettings, Format, Label, Legend, Series, Size, ValueAxis } from 'devextreme-react/chart';
import CardAnalytics from '@/components/card-analytics/CardAnalytics';
import { Sale } from '@/types/analytics';

const RevenueCard = ({ datasource }: { datasource: Sale[]}) => (
  <CardAnalytics title='Revenue' contentClass='sales'>
    <Chart dataSource={datasource}>
      <Series valueField='total' />
      <CommonSeriesSettings argumentField='date' type='splinearea'>
        <Border visible />
      </CommonSeriesSettings>
      <ArgumentAxis argumentType='datetime' />
      <ValueAxis>
        <Label>
          <Format type='currency' currency='USD' />
        </Label>
      </ValueAxis>
      <Legend visible={false} />
      <Size height={270} />
    </Chart>
  </CardAnalytics>
);

export default RevenueCard;