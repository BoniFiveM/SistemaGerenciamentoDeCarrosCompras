// src/App.js
import React, { useState } from 'react';
import VehicleList from './VehicleList';
import VehicleDetail from './VehicleDetail';
import TransactionHistory from './TransactionHistory';
import Footer from './Footer'; // Adicione esta linha
import { vehicles as vehicleData } from './vehicleData';

const App = () => {
    const [vehicles, setVehicles] = useState(vehicleData);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [notification, setNotification] = useState(null); // Adicione esta linha

    const filteredVehicles = vehicles.filter(vehicle => 
        vehicle.name.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedVehicles = [...filteredVehicles].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    const handlePurchase = (vehicle) => {
        const transaction = {
            date: new Date().toLocaleString(),
            vehicle: vehicle,
            price: vehicle.price // Use o preço do veículo
        };
        setTransactions([...transactions, transaction]);

        // Remove o veículo da lista após a compra
        const updatedVehicles = vehicles.filter(v => v.id !== vehicle.id);
        setVehicles(updatedVehicles);

        setSelectedVehicle(null); // Fecha o detalhe do veículo

        setNotification(`Veículo ${vehicle.name} comprado com sucesso!`);
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <div className="app-container">
            <div className="container">
                <h1>Sistema de Gerenciamento de Veículos</h1>
                {notification && <div className="notification">{notification}</div>}
                <input 
                    type="text" 
                    placeholder="Filtrar veículos" 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                />
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Nome</option>
                    <option value="price">Preço</option>
                    <option value="year">Ano</option>
                </select>
                <VehicleList vehicles={sortedVehicles} onSelect={setSelectedVehicle} />
                {selectedVehicle && (
                    <VehicleDetail vehicle={selectedVehicle} onPurchase={handlePurchase} onClose={() => setSelectedVehicle(null)} />
                )}
                <TransactionHistory transactions={transactions} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
