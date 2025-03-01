import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Marketplace from './components/Marketplace';
import OrderForm from './components/OrderForm';
import OrderSuccess from './components/OrderSuccess';

const App = () => {
  // Проверка авторизации (токен в localStorage)
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        {/* Страница входа */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/marketplace" /> // Если пользователь авторизован, перенаправляем на маркетплейс
            ) : (
              <Login onLogin={() => setIsAuthenticated(true)} /> // Если не авторизован, показываем страницу входа
            )
          }
        />

        {/* Страница регистрации */}
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/marketplace" /> // Если пользователь авторизован, перенаправляем на маркетплейс
            ) : (
              <Register onRegister={() => setIsAuthenticated(true)} /> // Если не авторизован, показываем страницу регистрации
            )
          }
        />

        {/* Страница маркетплейса (доступна только авторизованным пользователям) */}
        <Route
          path="/marketplace"
          element={
            isAuthenticated ? (
              <Marketplace /> // Показываем маркетплейс, если пользователь авторизован
            ) : (
              <Navigate to="/login" /> // Если не авторизован, перенаправляем на страницу входа
            )
          }
        />

        {/* Страница оформления заказа (доступна только авторизованным пользователям) */}
        <Route
          path="/order/:lotId"
          element={
            isAuthenticated ? (
              <OrderForm /> // Показываем форму заказа, если пользователь авторизован
            ) : (
              <Navigate to="/login" /> // Если не авторизован, перенаправляем на страницу входа
            )
          }
        />

        {/* Страница успешного оформления заказа (доступна только авторизованным пользователям) */}
        <Route
          path="/order-success"
          element={
            isAuthenticated ? (
              <OrderSuccess /> // Показываем страницу успешного заказа, если пользователь авторизован
            ) : (
              <Navigate to="/login" /> // Если не авторизован, перенаправляем на страницу входа
            )
          }
        />

        {/* Перенаправление на маркетплейс по умолчанию */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/marketplace" /> // Если пользователь авторизован, перенаправляем на маркетплейс
            ) : (
              <Navigate to="/login" /> // Если не авторизован, перенаправляем на страницу входа
            )
          }
        />

        {/* Страница 404 (если маршрут не найден) */}
        <Route path="*" element={<h1>404 - Страница не найдена</h1>} />
      </Routes>
    </Router>
  );
};

export default App;