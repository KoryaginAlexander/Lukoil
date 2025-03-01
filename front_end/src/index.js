import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Основной компонент
import './index.css'; // Глобальные стили

// Создаем корневой элемент для рендеринга
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);