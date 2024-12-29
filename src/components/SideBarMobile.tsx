'use client'

import React, { useState } from 'react';
import { FaPaperclip, FaComments, FaCog } from 'react-icons/fa';
import { IoChevronDown, IoChevronUp, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineInsertChart } from "react-icons/md";
import Image from 'next/image';
import CommifyLogo from '../../public/assets/images/Logo.png';

export function Sidebar() {
  const [activeItem, setActiveItem] = useState<string>('Dashboard');
  const [showIntegrations, setShowIntegrations] = useState(false);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (item === 'Integrations') setShowIntegrations(!showIntegrations);
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-64 p-4 bg-white shadow-md">
        <div className="my-8 mx-4">
          <Image
            src={CommifyLogo}
            alt="Logo"
            height={200}
            width={200}
          />
        </div>

        <ul className="space-y-2 mt-3">
          {/* Dashboard */}
          <li
            onClick={() => handleItemClick('Dashboard')}
            className={`flex items-center gap-3 p-2 ${
              activeItem === 'Dashboard' ? 'bg-white text-black font-bold border-r-4 border-[#4318FF]' : 'text-[#A3AED0]'
            } hover:bg-gray-100 rounded cursor-pointer transition`}
          >
            <MdOutlineInsertChart
              className={`text-lg ${
                activeItem === 'Dashboard' ? 'text-[#4318FF]' : 'text-[#A3AED0]'
              }`}
            />
            <span>Dashboard</span>
          </li>

          {/* Integrations Dropdown */}
          <li>
            <div
              onClick={() => handleItemClick('Integrations')}
              className={`flex justify-between items-center gap-3 p-2 ${
                activeItem === 'Integrations' ? 'bg-white text-black border-r-4 border-[#4318FF]' : 'text-[#A3AED0]'
              } hover:bg-gray-100 rounded cursor-pointer transition`}
            >
              <div className="flex items-center gap-3">
                <FaPaperclip
                  className={`text-lg ${
                    activeItem === 'Integrations' ? 'text-[#4318FF]' : 'text-[#A3AED0]'
                  }`}
                />
                <span>Integrations</span>
              </div>
              {showIntegrations ? (
                <IoChevronUp className="text-lg text-[#A3AED0]" />
              ) : (
                <IoChevronDown className="text-lg text-[#A3AED0]" />
              )}
            </div>
            {/* Dropdown */}
            {showIntegrations && (
              <ul className="ml-12 list-disc mt-2 space-y-2">
                <li
                  onClick={() => handleItemClick('Shopify')}
                  className={`text-[#5A6A85] hover:text-black transition cursor-pointer ${
                    activeItem === 'Shopify' ? 'text-[#4318FF]' : ''
                  }`}
                >
                  Shopify
                </li>
                <li
                  onClick={() => handleItemClick('Email')}
                  className={`text-[#5A6A85] hover:text-black transition cursor-pointer ${
                    activeItem === 'Email' ? 'text-[#4318FF]' : ''
                  }`}
                >
                  Email
                </li>
                <li
                  onClick={() => handleItemClick('WhatsApp')}
                  className={`text-[#5A6A85] hover:text-black transition cursor-pointer ${
                    activeItem === 'WhatsApp' ? 'text-[#4318FF]' : ''
                  }`}
                >
                  WhatsApp
                </li>
              </ul>
            )}
          </li>

          {/* Chat */}
          <li
            onClick={() => handleItemClick('Chat')}
            className={`flex items-center gap-3 p-2 ${
              activeItem === 'Chat' ? 'bg-white text-black font-bold border-r-4 border-[#4318FF]' : 'text-[#A3AED0]'
            } hover:bg-gray-100 rounded cursor-pointer transition`}
          >
            <FaComments
              className={`text-lg ${
                activeItem === 'Chat' ? 'text-[#4318FF]' : 'text-[#A3AED0]'
              }`}
            />
            <span>Chat</span>
          </li>

          {/* Feedback */}
          <li
            onClick={() => handleItemClick('Feedback')}
            className={`flex items-center gap-3 p-2 ${
              activeItem === 'Feedback' ? 'bg-white text-black font-bold border-r-4 border-[#4318FF]' : 'text-[#A3AED0]'
            } hover:bg-gray-100 rounded cursor-pointer transition`}
          >
            <FaCog
              className={`text-lg ${
                activeItem === 'Feedback' ? 'text-[#4318FF]' : 'text-[#A3AED0]'
              }`}
            />
            <span>Feedback</span>
          </li>

          {/* Settings */}
          <li
            onClick={() => handleItemClick('Setting')}
            className={`flex items-center gap-3 p-2 ${
              activeItem === 'Setting' ? 'bg-white text-black font-bold border-r-4 border-[#4318FF]' : 'text-[#A3AED0]'
            } hover:bg-gray-100 rounded cursor-pointer transition`}
          >
            <IoSettingsOutline
              className={`text-lg ${
                activeItem === 'Setting' ? 'text-[#4318FF]' : 'text-[#A3AED0]'
              }`}
            />
            <span>Settings</span>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Sidebar;
