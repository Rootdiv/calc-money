import React from 'react';

const HistoryItem = ({ transactions }) => (
  <li className={`history__item ${transactions.add ? 'history__item-plus' : 'history__item-minus'}`}>
    {transactions.description}
    <span className="history__money">{transactions.amount} ₽</span>
    <button className="history__delete">x</button>
  </li>
);

export default HistoryItem;
