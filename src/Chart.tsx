import { useState, useEffect } from 'react';
import { Line, LineConfig } from '@ant-design/plots';

const Chart = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    try {
      const response = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ data { name data { delivery number } } }' }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const json = await response.json();
      const fetchedData = json.data?.data;

      if (Array.isArray(fetchedData)) {
        setData(fetchedData);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.log('Fetch data failed:', error);
    }
  };

  const chartStyle = {
    height: '40vh', // Specify the desired height
  };

  const config: LineConfig = {
    data: data.flatMap((item) =>
      item.data.map((dataItem: any) => ({ name: item.name, ...dataItem }))
    ),
    xField: 'delivery',
    yField: 'number',
    seriesField: 'name',
    xAxis: {
      label: {
        formatter: (value: any) => `Delivery ${value}`, // Add a label formatter to display "Delivery" prefix
      },
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} style={chartStyle} />;
};

export default Chart;
