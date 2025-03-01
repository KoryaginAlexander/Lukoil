import React, { useState } from 'react';
import { register } from '../api';

const Register = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(email, password);
            localStorage.setItem('token', response.data.access_token);
            onRegister();
        } catch (err) {
            setError('Ошибка при регистрации');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Зарегистрироваться</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default Register;    