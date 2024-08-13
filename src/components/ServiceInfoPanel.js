import React, { useContext, useEffect, useState } from 'react';
import { MapContext } from '../context/MapContext';

const ServiceInfoPanel = ({ selectedServiceId }) => {
    const { services } = useContext(MapContext);
    
    // hold the currently selected service's information
    const [selectedService, setSelectedService] = useState(null);

    // It is used to update the selected service whenever selectedServiceId
    useEffect(() => {
        const service = services.find(svc => svc.id === selectedServiceId);
        // Update the state with the found service or null if not found
        setSelectedService(service);
    }, [selectedServiceId, services]);

    return (
        <div className="service-info-panel">
            <h3>Service Information</h3>
            {selectedService ? (
                <div>
                    <p><strong>Service Name:</strong> {selectedService.label}</p>
                    <p><strong>Type:</strong> {selectedService.category}</p>
                    <p><strong>Environment:</strong> {selectedService.environment}</p>
                    <p><strong>Cluster:</strong> {selectedService.location}</p>
                    <p><strong>Total Requests:</strong> {selectedService.requests}</p>
                    <p><strong>Failures:</strong> {selectedService.failures}</p>
                    <p>
                        <strong>Success Rate:</strong> 
                        {((selectedService.requests - selectedService.failures) / selectedService.requests * 100).toFixed(2)}%
                    </p>
                </div>
            ) : (
                <p>Select a service to view details</p>
            )}
        </div>
    );
};

export default ServiceInfoPanel;
