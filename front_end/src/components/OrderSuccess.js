import React from 'react';

const OrderSuccess = ({ order }) => {
    return (
        <div>
            <h1>Заказ успешно оформлен!</h1>
            <p>Номер заказа: {order.id}</p>
            <p>Лот №{order.lot_id} | {order.ksss_fuel_code} | {order.ksss_nb_code} | {order.volume} л</p>
            <p>Тип доставки: {order.delivery_type}</p>
        </div>
    );
};

export default OrderSuccess;