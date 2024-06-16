// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, TimeScale, Tooltip, Legend } from 'chart.js ';
// import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
// import { Chart } from 'react-chartjs-2';
// import 'chartjs-adapter-date-fns';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   TimeScale,
//   Tooltip,
//   Legend,
//   MatrixController,
//   MatrixElement
// );

// const FollowerActivityChart = ({ data }) => {
//   const options = {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'hour',
//           displayFormats: {
//             hour: 'ha'
//           }
//         },
//         title: {
//           display: true,
//           text: 'Time of Day'
//         }
//       },
//       y: {
//         type: 'category',
//         labels: ['Su', 'Sa', 'Fr', 'Th', 'We', 'Tu', 'Mo'],
//         title: {
//           display: true,
//           text: 'Day of Week'
//         }
//       }
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           title: (tooltipItems) => {
//             const date = tooltipItems[0].raw.x;
//             const day = tooltipItems[0].raw.y;
//             return `Day: ${day}, Time: ${new Date(date).toLocaleTimeString()}`;
//           },
//           label: (tooltipItem) => `Value: ${tooltipItem.raw.v}`
//         }
//       }
//     }
//   };

//   const chartData = {
//     datasets: [{
//       label: 'Follower Activity',
//       data: data,
//       backgroundColor: (context) => {
//         const value = context.raw.v;
//         if (value > 75) return '#ff0000';
//         if (value > 50) return '#ff8c00';
//         if (value > 25) return '#ffff00';
//         return '#00ff00';
//       },
//       borderColor: 'rgba(0, 0, 0, 0.1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
//       hoverBorderColor: 'rgba(255, 99, 132, 1)',
//     }]
//   };

//   return <Chart type='matrix' data={chartData} options={options} />;
// };

// export default FollowerActivityChart;