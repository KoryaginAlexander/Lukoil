import React, { useEffect, useState } from 'react';
import { getLots } from '../api';
import Navbar from './NavBar';
import LotCard from './LotCard';
import './Marketplace.css';

const Marketplace = () => {
  const [lots, setLots] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Моковые данные
  const mockLots = [
    {
      id: 1,
      ksss_fuel_code: 'АИ-95',
      ksss_nb_code: 'Нефтебаза_1',
      available_weight: 5000,
      price_per_ton: 50000,
    },
    {
      id: 2,
      ksss_fuel_code: 'ДТ',
      ksss_nb_code: 'Нефтебаза_2',
      available_weight: 10000,
      price_per_ton: 45000,
    },
    {
      id: 3,
      ksss_fuel_code: 'АИ-92',
      ksss_nb_code: 'Нефтебаза_3',
      available_weight: 8000,
      price_per_ton: 48000,
    },
  ];

  useEffect(() => {
    // Временно используем моковые данные вместо API
    setLots(mockLots);
    setLoading(false);
  }, [page]);

  return (
    <div className="marketplace">
      <Navbar />
      <div className="lot-list">
        {lots.map((lot) => (
          <LotCard key={lot.id} lot={lot} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1 || loading}
        >
          Назад
        </button>
        <span>Страница {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={loading}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default Marketplace;