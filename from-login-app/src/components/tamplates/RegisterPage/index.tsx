// RegisterPage.tsx
import React, { useState, useEffect } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

interface RegisterPageProps {
  onSubmit: (data: any) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData); 
  };


  const handleReset = () => {
    setFormData({
      name: '',
      birthDate: '',
      address: '',
      phoneNumber: '',
      email: '',
      password: ''
    });
  };

  useEffect(() => {
    console.log('Submitted Data:', submittedData);
  }, [submittedData]);

  return (
    <div className="bg-pink-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit}>
        <Input label='Name' type='text' name='name' value={formData.name} onChange={handleChange}/>
        <Input label='Tanggal Lahir' name='birthDate' type='date' value={formData.birthDate} onChange={handleChange}/>
        <Input label='Alamat' type='text' name='address' value={formData.address} onChange={handleChange} />
        <Input label='No Telepon' type='tel' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange}/>
        <Input label='Email' type='email' name='email' value={formData.email} onChange={handleChange}/>
        <Input label='Password' type='password' name='password' value={formData.password} onChange={handleChange}/>

        <div className="flex justify-between mt-4">
          <Button type="submit" text="Submit" />
          <Button type="button" onClick={handleReset} text="Reset" />
          
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
