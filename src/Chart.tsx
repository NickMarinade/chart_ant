import { useState, useEffect } from 'react';
import { Line, LineConfig } from '@ant-design/plots';

const Chart = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:4000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ data { year gdp name } }' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((json) => {
        const fetchedData = json.data?.data;
        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else {
          throw new Error('Invalid data format');
        }
      })
      .catch((error) => {
        console.log('Fetch data failed:', error);
      });
  };

  const config: LineConfig = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v: any) => `${(v / 10e8).toFixed(1)} B`,
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

  return <Line {...config} />;
};

export default Chart;
