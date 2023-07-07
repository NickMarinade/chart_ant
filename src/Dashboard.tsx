import React from 'react';
import { Layout } from 'antd';
import Chart from './Chart';
import Card from 'antd/es/card/Card';
import { Button } from 'antd';
import ProgressBar from './ProgressBar';
import Title from 'antd/es/typography/Title';

const { Header, Content, Footer } = Layout;

interface DashboardProps {
  isDarkMode: boolean;
  handleClick: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ isDarkMode, handleClick }) => {
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <a href="/" className="single-link">
          Dashboard
        </a>
          <Button style={{ marginLeft: 'auto' }} onClick={handleClick}>
            Change Theme to {isDarkMode ? 'Light' : 'Dark'}
          </Button>
      </Header>
      <Content style={{ minHeight: 'calc(100vh - 134px)', margin: '0px 20px' }}>
        <Card style={{ marginTop: 20 }} >
        <Title level={2}>Deliveries Overview</Title>
          <Chart />
        </Card>
        <Card style={{ marginTop: 20, width: '33%'}}>
        <Title level={2}>Daily Deliveries Progress</Title>
          <ProgressBar />
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Dashboard;
