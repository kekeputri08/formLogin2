import React, { FC, useState } from 'react';
import { navbarData } from '../../../utils/staticVariables';
import { Link } from 'react-router-dom';
import { FaHome, FaAtom, FaAddressBook, FaAddressCard, FaSignOutAlt } from 'react-icons/fa'; 

interface NavbarData {
  path: string;
  name: string;
  icon: string;
}

interface NavbarProps {
  navbarData: NavbarData[];
}

const Navbar: FC<NavbarProps> = ({ navbarData }) => {
  const [showText, setShowText] = useState(true);

  const handleLogoutClick = () => {
    setShowText(!showText);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaHome':
        return <FaHome />;
      case 'FaAddressBook':
        return <FaAddressBook />;
      case 'FaAtom':
        return <FaAtom />;
      case 'FaAddressCard':
        return <FaAddressCard />;      
      default:
        return null;
    }
  };

  return (
    <nav >
      <div className="flex flex-row p-4 items-center justify-center h-screen bg-[#f0d9f1] mx-auto">
        <ul className="flex flex-col items-start justify-between">
          {navbarData.map(data => (
            <li className='flex flex-row gap-4 items-center' key={data.path}>
              {renderIcon(data.icon)}
              <Link to={data.path} className={`text-black ${showText ? 'block' : 'hidden'}`}>{data.name}</Link>
            </li>
          ))}
          <div className="flex flex-row gap-4 items-center" 
               style={{ marginTop: '50px' }} 
               onClick={handleLogoutClick}>
            <FaSignOutAlt className="text-black" />
            <Link to="/logout" className={`logout-text text-black ${showText ? 'block' : 'hidden'}`}>Logout</Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
