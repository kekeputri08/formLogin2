
import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

interface LoginProps {
  onLogin: (email: string, password: string,) => void;
}

const Login:FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Input label='Email' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label='Password' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="flex justify-between mt-4">
        <Button type="submit" text="Login" />
        <div>
          <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password</Link>
          <span className="mx-2">|</span>
          <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
