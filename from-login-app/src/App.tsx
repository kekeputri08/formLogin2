// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/atoms/Navbar';
import { navbarData } from './utils/staticVariables';
import RegisterPage from './components/tamplates/RegisterPage';
import HomePage from './components/tamplates/HomePage';
import AboutPage from './components/tamplates/AboutPage';
import ServicesPage from './components/tamplates/ServicesPage';
import ContactPage from './components/tamplates/ContactPage';
import LoginPage from './components/tamplates/LoginPage';

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // implement login functionality
  };

  const handleRegister = (formData: any) => {
    console.log('yuhu', formData);
  };

  return (
    <Router>
      <div className="flex flex-row">
        <Navbar navbarData={navbarData} />
        <div className="flex flex-col justify-center items-center w-full">
          <div className='flex flex-row gap-4'>
            <Routes>
              <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/register" element={<RegisterPage onSubmit={handleRegister} />} /> 
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
