import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Логотип</div>
      <div className="filters">
        <select className="filter">
          <option value="">Вид топлива</option>
          <option value="АИ-92">АИ-92</option>
          <option value="АИ-95">АИ-95</option>
          <option value="ДТ">ДТ</option>
        </select>
        <select className="filter">
          <option value="">Регион</option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
        </select>
        <select className="filter">
          <option value="">Нефтебаза</option>
          <option value="Нефтебаза_1">Нефтебаза_1</option>
          <option value="Нефтебаза_2">Нефтебаза_2</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;