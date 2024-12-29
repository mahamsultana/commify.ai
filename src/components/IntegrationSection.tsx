'use client'

import React, { useState } from 'react'
import { integrations } from '@/data/integrationdata';
import { ConnectionDialog } from './ConnectionDialog'; // Assuming ConnectionDialog is imported correctly
import IntegrationCard from './Integrationcard';
import { Search } from './Search';

const IntegrationSection = () => {
  const [activeTab, setActiveTab] = useState('Discover');
  const [dialogOpen, setDialogOpen] = useState(false); // Track dialog visibility
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null); // Store selected integration

  //handling connections
  const handleConnect = (integration: string) => {
    setSelectedIntegration(integration);
    setDialogOpen(true); 
  };

  return (
    <section>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrations</h3>

      {/* Tabs */}
      <div className="flex items-center gap-6 mb-6 border-b border-gray-300">
        <button
          onClick={() => setActiveTab('Discover')}
          className={`py-2 px-4 ${activeTab === 'Discover' ? 'border-b-2 border-blue-500 text-blue-500 font-medium' : 'text-gray-600'} focus:outline-none`}
        >
          Discover
        </button>
        <button
          onClick={() => setActiveTab('Your Connections')}
          className={`py-2 px-4 ${activeTab === 'Your Connections' ? 'border-b-2 border-blue-500 text-blue-500 font-medium' : 'text-gray-600'} focus:outline-none`}
        >
          Your Connections
        </button>
      </div>

      {/* Search Input */}
      {activeTab === 'Discover' && (
        <div className="mb-6">
          <Search/>
        </div>
      )}

      {/* Integration Cards */}
      {activeTab === 'Discover' && (
        <div className="space-y-4">
          {integrations.map((integration) => (
            <IntegrationCard
              key={integration.name} // Unique key for each card
              title={integration.title}
              description={integration.description}
              Icon={integration.image}
              onClick={() => handleConnect(integration.name)} 
            />
          ))}
        </div>
      )}

      {/* Your Connections Tab */}
      {activeTab === 'Your Connections' && (
        <div>
          <p className="text-gray-600">You have no connections yet.</p>
        </div>
      )}

      <ConnectionDialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        selectedIntegration={selectedIntegration} 
      />
    </section>
  );
}

export default IntegrationSection;
