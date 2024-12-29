'use client'

import React from 'react';
import Sidebar from './SideBar';
import IntegrationSection from './IntegrationSection';
import HeaderSection from './Header';

const Dashboard: React.FC = () => {

  

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-[#F4F7FE] p-8">
        {/* Header */}
      <HeaderSection/>
     {/* Integration */}
      <IntegrationSection/>
      </div>
    </div>
  );
};

export default Dashboard;
