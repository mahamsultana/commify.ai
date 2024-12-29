'use client'
import React, { useState, useEffect, useRef } from 'react';
import BellIcons from '@/icons/bellicon';
import AvatarImage from '../../public/assets/images/Avatar.png';
import Image from 'next/image';
import ProfileDropdown from './ProfileDropDown';
import DropDownIcon from '@/icons/DropDownIcon';
import { GiHamburgerMenu } from "react-icons/gi";
import SideBarMobile from './SideBarMobile';

const HeaderSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar
  const sidebarRef = useRef<HTMLDivElement>(null); // Reference to sidebar

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar visibility
  };

  // Handle clicks outside the sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false); // Close sidebar if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between mb-8 relative">
      <div>
        <p className="text-gray-600">Hi Rayyan Zain,</p>
        <h2 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h2>
      </div>
      <div className="flex items-center gap-4 relative">
        {/* Notification Icon */}
        <div className="relative sm:block hidden">
          <BellIcons />
          <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
        </div>
        {/* Profile Section with Dropdown */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <Image
            src={AvatarImage}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-700 font-medium hidden sm:block">Rayyan Zain</span>
          <DropDownIcon />
        </div>
        {isDropdownOpen && (
          <div onClick={closeDropdown}>
            <ProfileDropdown onClose={closeDropdown} />
          </div>
        )}
        {/* Hamburger Icon for Mobile */}
        <GiHamburgerMenu
          className="sm:hidden block h-8 w-8 cursor-pointer"
          onClick={toggleSidebar} // Toggle Sidebar on click
        />
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="absolute top-0 left-0 w-64 bg-white h-screen z-50 sm:hidden"
        >
          <SideBarMobile />
        </div>
      )}
    </header>
  );
}

export default HeaderSection;
