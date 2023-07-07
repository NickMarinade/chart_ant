import React from 'react';
import { Progress, Tooltip, Space } from 'antd';

const ProgressBar: React.FC = () => (
  <>
    <Tooltip title="4 done / 4 in progress / 2 to do">
      <Progress style={{ marginBottom: 50 }} percent={40} status="active" strokeColor={{ from: '#005fee', to: '#1fcf08' }}  />
    </Tooltip>
    <Space style={{ width: '100%', justifyContent: 'space-between' }} wrap>
      <Tooltip title="4 done / 4 in progress / 2 to do">
        <Progress percent={80} success={{ percent: 40 }}  type="circle" />
      </Tooltip>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} success={{ percent: 30 }} type="circle" />
      </Tooltip>
      <Tooltip title="All packages have been picked up">
        <Progress percent={100} type="circle" />
      </Tooltip>
    </Space>
  </>
);

export default ProgressBar;