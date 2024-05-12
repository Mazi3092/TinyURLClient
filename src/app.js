import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './style.css'

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/users/urls` ,{headers:{authorization:localStorage.getItem('accessToken')}});
        // const data = response.data;
        console.log(response.data)
        let i = 0
        let values = []
        let names = []
        response.data.forEach(l => {
          values[i] = l.clicks.length 
          names[i] = l.uniqueName
          i++
      });
      console.log(values)
      console.log(names)

      const data = response.data;


        if (data) {
          setChartData({
                        // type: 'pie',
            // labels: ['A', 'B', 'C', 'D', 'E'],
            labels: names,
            datasets: [
              {
                label: 'clicks',
                data: values,
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                // borderColor: [
                //   'green',
                //   'purple',
                //   'orange',
                //   'red',
                //   'blue',
                //   'yellow',
                // ],
                borderWidth: 1,
              },
            ],
          });
          setDataLoaded(true);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    // fetchData.resize(width, height);
    fetchData();
  }, []);

  return (
    <div>
      {dataLoaded ? (
        <Pie
        width={200} // Set the width of the Pie chart to 200px
        height={200} // Set the height of the Pie chart to 200px
      
          data={chartData}
          options={{
            indexAxis: 'x', // Use index scale for x-axis
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BarChart;
