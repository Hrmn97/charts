import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 

 function Chart(props) {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
   
      
       const data = {
        labels: props.labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: props.data1,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: props.data2,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
  return <>
  <div>
  <Line options={options} data={data} />
  </div>
  </>;
}

export default Chart