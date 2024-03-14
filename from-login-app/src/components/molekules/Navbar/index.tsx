import React, { FC } from 'react';
import { navbarData } from '../../../utils/staticVariables';
import { Link } from 'react-router-dom';
import { FaHome,} from "react-icons/fa";


interface NavbarData {
  path: string;
  name: string;
  icon: string;
}

// Tentukan tipe data untuk prop menuItems
interface NavbarProps {
  navbarData: NavbarData[];
}

const Navbar: FC<NavbarProps> = ({ navbarData }) => {

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaHome':
        return <FaHome />;
      default:
        return null;
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-menu"> 
          {navbarData.map(data => (
            <li className='flex flex-row gap-4 items-center' key={data.path}>
               {renderIcon(data.icon)}
              <Link to={data.path}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;