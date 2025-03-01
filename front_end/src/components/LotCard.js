import React from 'react';
import './LotCard.css';

const LotCard = ({ lot }) => {
  return (
    <div className="lot-card">
      <h3>Лот №{lot.id}</h3>
      <p><strong>Топливо:</strong> {lot.ksss_fuel_code}</p>
      <p><strong>Нефтебаза:</strong> {lot.ksss_nb_code}</p>
      <p><strong>Доступный объем:</strong> {lot.available_weight} л</p>
      <p><strong>Цена за тонну:</strong> {lot.price_per_ton} руб</p>
      <button className="buy-button">Купить</button>
    </div>
  );
};

export default LotCard;