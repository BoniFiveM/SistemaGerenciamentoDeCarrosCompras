// src/VehicleList.js
import React from 'react';

const VehicleList = ({ vehicles, onSelect }) => {
    return (
        <div>
            <h2>Veículos Disponíveis</h2>
            {vehicles.length === 0 ? (
                <p>Nenhum veículo disponível.</p>
            ) : (
                <ul>
                    {vehicles.map(vehicle => (
                        <li key={vehicle.id} onClick={() => onSelect(vehicle)}>
                            {vehicle.name} - {vehicle.color}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default VehicleList;
