"use client";
// import React, { useCallback, useEffect, useState } from 'react';

// import { Item } from 'devextreme-react/toolbar';
// import Tabs from 'devextreme-react/tabs';
// import { LoadPanel } from 'devextreme-react/load-panel';
// import ScrollView from 'devextreme-react/scroll-view';

// import { useScreenSize } from '@/lib/media-query';

// import { getOpportunitiesByCategory, getSalesByCategory, getSales, getSalesByStateAndCity, calcSalesByState } from 'dx-template-gallery-data';

 
// import ToolbarAnalytics from '@/components/toolbar-analytics/ToolbarAnalytics';
// import RevenueSnapshotCard from '@/components/revenue-snapshot-card/RevenueSnapshotCard';
// import RevenueAnalysisCard from '@/components/revenue-analysis-card/RevenueAnalysisCard';
// import ConversionCard from '@/components/conversion-card/ConversionCard';
// import RevenueCard from '@/components/revenue-card/RevenueCard';
// import ConversionTicker from '@/components/conversion-ticker/ConversionTicker';
// import LeadsTicker from '@/components/leads-ticker/LeadsTicker';
// import OpportunitiesTicker from '@/components/opportunities-ticker/OpportunitiesTicker';
// import RevenueTotalTicker from '@/components/revenue-total-ticker/RevenueTotalTicker';

// import { ANALYTICS_PERIODS, DEFAULT_ANALYTICS_PERIOD_KEY } from '@/shared/constants';
// import { Sale, SaleOrOpportunityByCategory, SaleByState } from '@/types/analytics';

// import './analytics.scss';

// const calculateTotal = (data: (SaleOrOpportunityByCategory & Sale)[]) => {
//   return data.reduce((acc, item) => acc + (item.value || item.total), 0);
// };

// const items = Object.keys(ANALYTICS_PERIODS);

// const AnalyticsDashboard = () => {
//   const [tabIndex, setTabIndex] = useState(ANALYTICS_PERIODS[DEFAULT_ANALYTICS_PERIOD_KEY].index);
//   const [dateRange, setDateRange] = useState(ANALYTICS_PERIODS[DEFAULT_ANALYTICS_PERIOD_KEY].period.split('/'));
//   const [opportunities, setOpportunities] = useState<SaleOrOpportunityByCategory[]>([]);
//   const [salesByCategory, setSalesByCategory] = useState<SaleOrOpportunityByCategory[]>([]);
//   const [sales, setSales] = useState<Sale[]>([]);
//   const [salesByState, setSalesByState] = useState<SaleByState[]>([]);
//   const [salesTotal, setSalesTotal] = useState(0);
//   const [opportunitiesTotal, setOpportunitiesTotal] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [tabsWidth, setTabsWidth] = useState<number | string>('auto');

//   const { isXSmall } = useScreenSize();

//   useEffect(() => {
//     Promise.all([
//       getOpportunitiesByCategory(...dateRange).then((data: any) => {
//         setOpportunities(data);
//         setOpportunitiesTotal(calculateTotal(data));
//       }),
//       getSalesByCategory(...dateRange).then((data: any) => setSalesByCategory(data)),
//       getSales(...dateRange).then((data: any) => {
//         setSales(data);
//         setSalesTotal(calculateTotal(data));
//       }),
//       getSalesByStateAndCity(...dateRange)
//         .then((data: any) => calcSalesByState(data))
//         .then((data: any) => setSalesByState(data)),
//     ])
//       .then(() => setIsLoading(false))
//       .catch((error) => console.log(error));
//   }, [dateRange]);

//   const onTabClick = useCallback((e: any) => {
// 	const { index, period } = ANALYTICS_PERIODS[e.addedItems[0] as keyof typeof ANALYTICS_PERIODS];
// 	setTabIndex(index);
//     setDateRange(period.split('/'));
//     setIsLoading(true);
//   }, []);

//   useEffect(() => {
//     setTabsWidth(isXSmall ? 150 : 'auto');
//   }, []);

//   return (
//     <ScrollView className='view-wrapper-scroll'>
//       <ToolbarAnalytics
//         title='Dashboard'
//         additionalToolbarContent={
//           <Item
//             location='before'
//           >
//             <Tabs
//               width={tabsWidth}
//               scrollByContent
//               showNavButtons={false}
//               dataSource={items}
//               selectedIndex={tabIndex}
//               onSelectionChanged={onTabClick}
//             />
//           </Item>
//         }
//       >
//         <div className='cards compact'>
//           <OpportunitiesTicker value={opportunitiesTotal} />
//           <RevenueTotalTicker value={salesTotal} />
//           <ConversionTicker value={16} />
//           <LeadsTicker value={51} />
//         </div>
//         <div className='cards normal'>
//           <RevenueCard datasource={sales} />
//           <ConversionCard datasource={opportunities} />
//           <RevenueAnalysisCard datasource={salesByState} />
//           <RevenueSnapshotCard datasource={salesByCategory} />
//         </div>
//       </ToolbarAnalytics>
//       <LoadPanel container='.content' visible={isLoading} position={{ of: '.layout-body' }} />
//     </ScrollView>
//   );
// };

// export default AnalyticsDashboard;
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from '@/recharts';
import { AreaChart, Area} from '@/recharts';

import FollowerActivityChart from '@/components/FollowerActivityChart';

const sampleData = [
  // Sample data format
  { x: new Date('2023-06-10T00:00:00'), y: 'Mo', v: 10 },
  { x: new Date('2023-06-10T01:00:00'), y: 'Mo', v: 20 },
  // Add more data points here
];

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Analytics = () => {
  return (
      <div className="p-4 space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <div className="text-zinc-500 dark:text-zinc-400">Likes</div>
            <div className="text-2xl font-bold">160</div>
            <div className="text-green-500">▲ 100.00%</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <div className="text-zinc-500 dark:text-zinc-400">Impressions</div>
            <div className="text-2xl font-bold text-blue-500">5,844</div>
            <div className="text-green-500">▲ 100.00%</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <div className="text-zinc-500 dark:text-zinc-400">Engagement Rate</div>
            <div className="text-2xl font-bold">4.36%</div>
            <div className="text-red-500">▼ 0.00%</div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
          <div className="mb-2 text-zinc-500 dark:text-zinc-400">Follower activity</div>
          <div className="text-zinc-500 dark:text-zinc-400 mb-4">See when your followers are most active</div>
          {/* <FollowerActivityChart data={sampleData} /> */}
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="text-zinc-500 dark:text-zinc-400">Engagement</div>
            <div className="flex space-x-2">
              <span className="text-blue-500">Likes</span>
              <span className="text-green-500">Retweets</span>
              <span className="text-yellow-500">Comments</span>
              <span className="text-purple-500">Profile clicks</span>
              <span className="text-teal-500">Link clicks</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <div className="text-zinc-500 dark:text-zinc-400">660 Followers</div>
            <div className="text-green-500">▲ 0.71%</div>
          </div>
          <div className="text-zinc-500 dark:text-zinc-400 mb-4">You're growing with 3 followers per day!</div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
          <div className="flex space-x-4 mb-4">
            <div className="text-blue-500 border-b-2 border-blue-500">Engagement Rate</div>
            <div className="text-zinc-500 dark:text-zinc-400">Engagement</div>
            <div className="text-zinc-500 dark:text-zinc-400">Impressions</div>
          </div>
          <div className="text-zinc-500 dark:text-zinc-400 mb-2">Highest Ranking Posts</div>
          <div className="text-zinc-500 dark:text-zinc-400 mb-4">Your best performing posts, ranked by engagement rate</div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-zinc-500 dark:text-zinc-400">
                <th className="p-2">Rank</th>
                <th className="p-2">Post</th>
                <th className="p-2">Impressions</th>
                <th className="p-2">Engagements</th>
                <th className="p-2">Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">1st</td>
                <td className="p-2">The best part about being a full-time #voiceactor at home? You can choose to wake up when...</td>
                <td className="p-2">386</td>
                <td className="p-2">20</td>
                <td className="p-2">5.18%</td>
              </tr>
              <tr>
                <td className="p-2">2nd</td>
                <td className="p-2">Can I be real for a sec? Building a #voiceacting business takes time. If you don't always book...</td>
                <td className="p-2">5,143</td>
                <td className="p-2">224</td>
                <td className="p-2">4.36%</td>
              </tr>
              <tr>
                <td className="p-2">3rd</td>
                <td className="p-2">Character or Commercial #voiceacting first? Adapt to your situation. Companies have MASSI...</td>
                <td className="p-2">315</td>
                <td className="p-2">11</td>
                <td className="p-2">3.49%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )};

export default Analytics;