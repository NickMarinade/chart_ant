import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const Dashboard: React.FC = () => {
  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <a href="/" className="single-link">Dashboard</a> {/* Single link */}
      </Header>
      <Content style={{ minHeight: 'calc(100vh - 134px)' }}>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Dashboard;
