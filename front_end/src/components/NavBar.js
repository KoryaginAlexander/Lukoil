import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">�������</div>
      <div className="filters">
        <select className="filter">
          <option value="">��� �������</option>
          <option value="��-92">��-92</option>
          <option value="��-95">��-95</option>
          <option value="��">��</option>
        </select>
        <select className="filter">
          <option value="">������</option>
          <option value="������">������</option>
          <option value="�����-���������">�����-���������</option>
        </select>
        <select className="filter">
          <option value="">���������</option>
          <option value="���������_1">���������_1</option>
          <option value="���������_2">���������_2</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;