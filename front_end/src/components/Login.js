import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api'; // Импортируем функцию для входа
import background from '../assets/background.png'; // Импортируем изображение
import './Login.css'; // Импортируем стили

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.data.access_token);
      onLogin(); // Обновляем состояние авторизации
      navigate('/marketplace'); // Перенаправляем на маркетплейс
    } catch (err) {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className="login-layout">
      {/* Левая часть: блок логина */}
      <div className="login-side">
        <div className="login-box">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="username@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">Sign in</button>
          </form>
          <p className="register-link">
            Don't have an account yet? <a href="/register">Register for free</a>
          </p>
        </div>
      </div>

      {/* Правая часть: фото */}
      <div className="image-side">
        <img src={background} alt="Background" />
      </div>
    </div>
  );
};

export default Login;