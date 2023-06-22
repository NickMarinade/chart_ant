import React from 'react';
import { Layout } from 'antd';
import Chart from './Chart';

const { Header, Content, Footer } = Layout;

const Dashboard: React.FC = () => {
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <a href="/" className="single-link">Dashboard</a> {/* Single link */}
      </Header>
      <Content style={{ minHeight: 'calc(100vh - 134px)' }}>
        <div className="site-layout-content">
          <Chart /> {/* Render the chart component */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Dashboard;
