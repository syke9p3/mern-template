import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';

const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white w-1/4 min-h-screen w-[250px]">
        <div className="p-4">
          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <img className="w-12 h-12 bg-white rounded-full object-cover" src='https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg'></img>
            <div>
              <p className="text-lg font-semibold">Ria Karen</p>
              <p className="text-sm">Intern</p>
            </div>
          </div>
  
          {/* Menu Items */}
          <ul className="mt-6">
            <li className="flex items-center space-x-2">
              <BiSolidDashboard />
              <a href="/">Dashboard</a>
            </li>
  
            <li className="flex items-center space-x-2">
              <MdOutlineLocationOn />
              <a href="/profile">Sites</a>
            </li>
  
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;