import React, { FC, useState } from 'react';
import { navbarData } from '../../../utils/staticVariables';
import { Link } from 'react-router-dom';
import { FaHome, FaAtom, FaAddressBook, FaAddressCard, FaSignOutAlt, FaAngleDoubleLeft } from 'react-icons/fa'; 
import logoK from '../../../assets/images/logoK.png';

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


  const toggleShowText = () => {
    setShowText(!showText);
  };

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
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
    <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex flex-row p-6 items-center justify-center h-screen bg-[#f0d9f1] mx-auto">
      <img src={logoK} alt="keke" className="h-20 w-auto mb-1 absolute top-10 z-10" />
        <ul className="flex flex-col items-start justify-between">
          {navbarData.map(data => (
            <li className='flex flex-row gap-4 items-center' key={data.path}>
              {renderIcon(data.icon)}
              <Link to={data.path} className={`text-black ${showText ? 'block' : 'hidden'}`}>{data.name}</Link>
            </li>
          ))}
          <li className="flex flex-row gap-4 items-center mt-12" >
            <div>
              <FaSignOutAlt className="text-black" />
            </div>
            <Link to="/logout" className={`logout-text text-black ${showText ? 'block' : 'hidden'}`}>Logout</Link>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 left-32 mb-4 ml-4 " >
        <FaAngleDoubleLeft className="text-black cursor-pointer" onClick={toggleShowText} />
      </div>
    </nav>
  );
};

export default Navbar;
