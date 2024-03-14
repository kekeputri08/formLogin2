import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/atoms/Navbar';
import { navbarData } from './utils/staticVariables';
import RegisterPage from './components/tamplates/RegisterPage';
import HomePage from './components/tamplates/HomePage';
import AboutPage from './components/tamplates/AboutPage';
import ServicesPage from './components/tamplates/ServicesPage';
import ContactPage from './components/tamplates/ContactPage';
interface FormData {
  name: string;
  birthDate: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
}

type ErrorMessage = string | null;
type SuccessMessage = string | null;

const App: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [error, setError] = useState<ErrorMessage>(null);
  const [successMessage, setSuccessMessage] = useState<SuccessMessage>(null);

  const handleSubmit = (data: FormData) => {
    if (!data.name || !data.birthDate || !data.address || !data.phoneNumber || !data.email || !data.password) {
      setError('Semua bidang harus diisi');
      return;
    }
    setSubmittedData(data);
    setSuccessMessage('Data berhasil disubmit!');
    setError(null);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setError(null);
    setSuccessMessage(null);
  };

  useEffect(() => {
    console.log('Submitted Data:', submittedData);
  }, [submittedData]);

  return (
    <Router>
      <div className="flex flex-row">
        <Navbar navbarData={navbarData} />
        <div className="flex flex-col justify-center items-center w-full">
          <div className='flex flex-row gap-4'>
            <Routes>
              <Route path="/" element={<RegisterPage onSubmit={handleSubmit} />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            {submittedData && (
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl mb-4">Data Register:</h2>
                <p>Nama: {submittedData.name}</p>
                <p>Tanggal Lahir: {submittedData.birthDate}</p>
                <p>Alamat: {submittedData.address}</p>
                <p>No Telepon: {submittedData.phoneNumber}</p>
                <p>Email: {submittedData.email}</p>
                <p>Password: {submittedData.password}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;