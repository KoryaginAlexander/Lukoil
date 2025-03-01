import React from 'react';
import './LotCard.css';

const LotCard = ({ lot }) => {
  return (
    <div className="lot-card">
      <h3>��� �{lot.id}</h3>
      <p><strong>�������:</strong> {lot.ksss_fuel_code}</p>
      <p><strong>���������:</strong> {lot.ksss_nb_code}</p>
      <p><strong>��������� �����:</strong> {lot.available_weight} �</p>
      <p><strong>���� �� �����:</strong> {lot.price_per_ton} ���</p>
      <button className="buy-button">������</button>
    </div>
  );
};

export default LotCard;