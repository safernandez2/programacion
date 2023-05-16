import React from 'react';
import './Login.css'
import axios from 'axios';
import { useState } from 'react';


const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://0a2300a904cdfd16837b162b00b9001a.web-security-academy.net/login', {
        username: username,
        password: password,
      });
      
      console.log(response.data); 
      
    } catch (error) {
      console.error(error);
    }
  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  

  return (
    
    <body className="login-page" >
          <div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
  </div>
      <div className="login-box">
        <h2 className="heading-login-box">Login</h2>
        <form>
          <div className="user-box">
            <input className="user-box-input" type="text" required value={username} onChange={handleUsernameChange} />
            <label className="user-box-label">Usuario</label>
          </div>
          <div className="user-box">
            <input className="user-box-input" type="password" required value={password} onChange={handlePasswordChange} />
            <label className="user-box-label">Contraseña</label>
          </div>
          <a type="submit" className="login-box-button" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            
            <button onClick={handleLogin}>Iniciar sesión</button>
          </a>
        </form>
      </div>
    </body>
  );
};

export default LoginPage;


