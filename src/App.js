import './styles.css'; // Import CSS for styling the application
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
        // Wrap the entire application in the MapProvider to provide context values
        <MapProvider>
            <div className="app-container">
                <SystemMapView onServiceClick={handleServiceClick} />
                <ServiceInfoPanel selectedServiceId={selectedService} />
            </div>
        </MapProvider>
    );
}

export default App;
