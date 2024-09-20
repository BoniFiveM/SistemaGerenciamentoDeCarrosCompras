// src/VehicleDetail.js
import React, { useState } from 'react';

const VehicleDetail = ({ vehicle, onPurchase, onClose }) => {
    const [color, setColor] = useState(vehicle.color);

    const handlePurchase = () => {
        onPurchase({ ...vehicle, color });
    };

    return (
        <div>
            <h2>Detalhes do Veículo: {vehicle.name}</h2>
            <div className="input-group">
                <label>
                    Cor:
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handlePurchase}>Comprar</button>
            <button onClick={onClose}>Fechar</button>
        </div>
    );
};

export default VehicleDetail;
