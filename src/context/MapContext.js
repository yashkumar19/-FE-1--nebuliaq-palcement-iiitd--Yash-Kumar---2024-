import React, { createContext, useState, useEffect } from 'react';
import { retrieveServiceData, retrieveConnectionData } from '../core/dataRetriever';

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
    const [services, setServices] = useState([]);
   
    const [connections, setConnections] = useState([]);      // State to hold the list of connections

    useEffect(() => {
        const loadData = async () => {
            try {
                const servicesData = await retrieveServiceData();        // Retrieve service data and connection data
                const connectionsData = await retrieveConnectionData();
                setServices(servicesData);
                setConnections(connectionsData);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        // Call to fetch and set the data
        loadData();
    }, []); 

    return (
        // Provide the services and connections to child components
        <MapContext.Provider value={{ services, connections }}>
            {children}
        </MapContext.Provider>
    );
};
