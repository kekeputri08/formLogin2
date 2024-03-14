import React, { FC } from 'react';
import { navbarData } from '../../../utils/staticVariables';
import { Link } from 'react-router-dom';

interface NavbarData {
  path: string;
  name: string;
}

// Tentukan tipe data untuk prop menuItems
interface NavbarProps {
  navbarData: NavbarData[];
}

const Navbar: FC<NavbarProps> = ({ navbarData }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-menu">
          {navbarData.map(data => (
            <li key={data.path}>
              {/* Gunakan Link untuk menavigasi ke rute yang sesuai */}
              <Link to={data.path}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
