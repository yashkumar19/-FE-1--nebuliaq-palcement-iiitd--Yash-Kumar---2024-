import './styles.css'; // Ensure the correct path to your CSS file
import React, { useState } from 'react';
import { MapProvider } from './context/MapContext';
import SystemMapView from './components/SystemMapView';
import ServiceInfoPanel from './components/ServiceInfoPanel';

function App() {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (serviceId) => {
        setSelectedService(serviceId);
    };

    return (
        <MapProvider>
            <div className="app-container">
                <header className="app-header">
                    <h1>Service Map Visualizer</h1>
                </header>
                <div className="graph-container">
                    <SystemMapView onServiceClick={handleServiceClick} />
                    <ServiceInfoPanel selectedServiceId={selectedService} />
                </div>
            </div>
        </MapProvider>
    );
}

export default App;
