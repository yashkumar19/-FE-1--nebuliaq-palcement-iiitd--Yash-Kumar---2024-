import React, { useContext, useEffect } from 'react';
import { MapContext } from '../context/MapContext';
import { initializeGraph } from '../core/graphInitializer';

const SystemMapView = ({ onServiceClick }) => {
    const { services, connections } = useContext(MapContext);

    useEffect(() => {
        // Check if there are services and connections available
        if (services.length && connections.length) {
            const cy = initializeGraph('graph-container', services, connections);
            cy.on('tap', 'node', function(evt) {
                // Get the ID of the tapped node
                const nodeId = evt.target.id();
    
                if (onServiceClick) {           // Invoke onServiceClick callback with the node ID if provided
                    onServiceClick(nodeId);
                }
            });
        }
    }, [services, connections, onServiceClick]); // Dependency array to re-run effect if these values change

    return (
        <div id="graph-container" style={{ width: '100%', height: '600px' }}>
        </div>
    );
};

export default SystemMapView;
