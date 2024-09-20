// src/TransactionHistory.js
import React from 'react';

const TransactionHistory = ({ transactions }) => {
    return (
        <div>
            <h2>Histórico de Transações</h2>
            {transactions.length === 0 ? (
                <p>Histórico vazio.</p>
            ) : (
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            {transaction.date}: Comprou {transaction.vehicle.name} por {transaction.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TransactionHistory;
