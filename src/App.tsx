import React from 'react';
import Dashboard from './Dashboard';
import { useState } from 'react';
import { ConfigProvider, theme } from 'antd';

const App: React.FC = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <ConfigProvider theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>
      <div className="App">
        <Dashboard isDarkMode={isDarkMode} handleClick={handleClick} />
      </div>
    </ConfigProvider>
  );
};

export default App;
