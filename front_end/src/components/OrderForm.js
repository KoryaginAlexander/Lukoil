import React, { useState } from 'react';
import { createOrder } from '../api';

const OrderForm = ({ lot }) => {
    const [volume, setVolume] = useState('');
    const [deliveryType, setDeliveryType] = useState('Самовывоз');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (volume > lot.available_weight) {
            setError('Недостаточно топлива');
            return;
        }
        try {
            await createOrder({
                lot_id: lot.id,
                volume: parseInt(volume),
                delivery_type: deliveryType,
                client_id: 1 // Заменить на реальный ID клиента
            });
            window.location.href = '/order-success';
        } catch (err) {
            setError('Ошибка при оформлении заказа');
        }
    };

    return (
        <div>
            <h1>Оформление заказа</h1>
            <p>Лот №{lot.id} | {lot.ksss_fuel_code} | {lot.ksss_nb_code} | {lot.available_weight} л</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Объем топлива:
                    <input
                        type="number"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Тип доставки:
                    <select value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
                        <option value="Самовывоз">Самовывоз</option>
                        <option value="Доставка">Доставка</option>
                    </select>
                </label>
                <button type="submit">Оформить заказ</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default OrderForm;