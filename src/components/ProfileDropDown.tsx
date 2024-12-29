import React from 'react';

interface ProfileDropdownProps {
  onClose: () => void; // Callback function to handle closing
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
  return (
    <div
      className="absolute right-0 mt-6 w-48 bg-[#F4F7FE] border border-gray-200 rounded-md shadow-lg"
      onClick={(e) => e.stopPropagation()} 
    >
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onClose}>
          View Profile
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onClose}>
          Settings
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onClose}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
