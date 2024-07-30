"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from '@/recharts';
import { AreaChart, Area} from '@/recharts';




const Analytics = () => {


  // sample data for charts
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
    {
      name: 'Page H',
      uv: 3340,
      pv: 2340,
      amt: 1000,
    },
    {
      name: 'Page I',
      uv: 4200,
      pv: 3200,
      amt: 2600,
    },
    {
      name: 'Page J',
      uv: 5000,
      pv: 1898,
      amt: 2710,
    },
    {
      name: 'Page K',
      uv: 6000,
      pv: 7800,
      amt: 3290,
    },
    {
      name: 'Page L',
      uv: 4780,
      pv: 5908,
      amt: 3000,
    },
  ];


  return (
    <div className="p-4 space-y-4">
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <div style={{ color: '#d1d5db' }}>Likes</div>
            <div className="text-2xl font-bold">160</div>
            <div style={{ color: '#10b981' }}>▲ 100.00%</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <div style={{ color: '#d1d5db' }}>Impressions</div>
            <div className="text-2xl font-bold">5,844</div>
            <div style={{ color: '#10b981' }}>▲ 100.00%</div>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <div style={{ color: '#d1d5db' }}>Engagement Rate</div>
            <div className="text-2xl font-bold">4.36%</div>
            <div style={{ color: '#f87171' }}>▼ 0.00%</div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
          <div className="mb-2">Follower activity</div>
          <div className="mb-4">See when your followers are most active</div>
          <ResponsiveContainer width={850} height={400}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <div style={{ color: '#d1d5db' }}>Engagement</div>
            <div className="flex">
              <span className='p-2' style={{ color: '#3b82f6' }}>Likes </span>
              <span className='p-2' style={{ color: '#10b981' }}>Retweets </span>
              <span className='p-2' style={{ color: '#f59e0b' }}>Comments </span>
              <span className='p-2' style={{ color: '#8b5cf6' }}>Profile clicks </span>
              <span className='p-2' style={{ color: '#3b82f6' }}>Link clicks </span>
            </div>
          </div>
          <ResponsiveContainer width={850} height={400}>
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
            <div>660 Followers</div>
            <div style={{ color: '#10b981' }}>▲ 0.71%</div>
          </div>
          <div style={{ color: '#d1d5db' }} className="mb-4">You're growing with 3 followers per day!</div>
            
          <ResponsiveContainer width={850} height={400}>
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
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" stackId="1" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
            
        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
          <div style={{ color: '#d1d5db' }} className="mb-2"><h4>Highest Ranking Posts</h4></div>
          <div style={{ color: '#d1d5db' }} className="mb-4">Your best performing posts, ranked by engagement rate</div>
          <table className="table w-full text-left">
            <thead>
              <tr>
                <th className="p-4">Rank</th>
                <th className="p-4">Post</th>
                <th className="p-4">Impressions</th>
                <th className="p-4">Engagements</th>
                <th className="p-4">Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">1st</td>
                <td className="p-4">The best part about being a full-time #voiceactor at home? You can choose to wake up when...</td>
                <td className="p-4">386</td>
                <td className="p-4">20</td>
                <td className="p-4">5.18%</td>
              </tr>
              <tr>
                <td className="p-4">2nd</td>
                <td className="p-4">Can I be real for a sec? Building a #voiceacting business takes time. If you don't always book...</td>
                <td className="p-4">5,143</td>
                <td className="p-4">224</td>
                <td className="p-4">4.36%</td>
              </tr>
              <tr>
                <td className="p-4">3rd</td>
                <td className="p-4">Character or Commercial #voiceacting first? Adapt to your situation. Companies have MASSI...</td>
                <td className="p-4">315</td>
                <td className="p-4">11</td>
                <td className="p-4">3.49%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )};

export default Analytics;