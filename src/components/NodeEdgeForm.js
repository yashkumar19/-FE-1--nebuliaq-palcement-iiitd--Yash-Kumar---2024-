import React, { useState, useContext } from 'react';
import { MapContext } from '../context/MapContext';

const NodeEdgeForm = () => {
    // Access the services and connections state, along with their setters, from the MapContext
    const { services, connections, setServices, setConnections } = useContext(MapContext);
    const [nodeData, setNodeData] = useState({
        id: '', 
        label: '', 
        category: '', 
        environment: '', 
        location: '', 
        requests: 0, 
        failures: 0
    });

    // State to manage edge data input fields
    const [edgeData, setEdgeData] = useState({
        source: '', 
        target: '', 
        requests: 0, 
        delay: 0
    });

    // update nodeData state on input change
    const handleNodeChange = (e) => {
        setNodeData({ ...nodeData, [e.target.name]: e.target.value });
    };

    // update edgeData state on input change
    const handleEdgeChange = (e) => {
        setEdgeData({ ...edgeData, [e.target.name]: e.target.value });
    };

    //add a new node to the services array
    const addNode = () => {
        setServices([...services, nodeData]);
    };

    //add a new edge to the connections array
    const addEdge = () => {
        setConnections([...connections, edgeData]);
    };

    return (
        <div className="form-container">
            {/* Form section for adding a new node */}
            <h3>Add Node</h3>
            <input 
                type="text" 
                name="id" 
                placeholder="ID" 
                onChange={handleNodeChange} 
            />
            <input 
                type="text" 
                name="label" 
                placeholder="Label" 
                onChange={handleNodeChange} 
            />
            <input 
                type="text" 
                name="category" 
                placeholder="Category" 
                onChange={handleNodeChange} 
            />
            <input 
                type="text" 
                name="environment" 
                placeholder="Environment" 
                onChange={handleNodeChange} 
            />
            <input 
                type="text" 
                name="location" 
                placeholder="Location" 
                onChange={handleNodeChange} 
            />
            <input 
                type="number" 
                name="requests" 
                placeholder="Requests" 
                onChange={handleNodeChange} 
            />
            <input 
                type="number" 
                name="failures" 
                placeholder="Failures" 
                onChange={handleNodeChange} 
            />
            <button onClick={addNode}>Add Node</button>

            {/* Form section for adding a new edge */}
            <h3>Add Edge</h3>
            <input 
                type="text" 
                name="source" 
                placeholder="Source Node ID" 
                onChange={handleEdgeChange} 
            />
            <input 
                type="text" 
                name="target" 
                placeholder="Target Node ID" 
                onChange={handleEdgeChange} 
            />
            <input 
                type="number" 
                name="requests" 
                placeholder="Requests" 
                onChange={handleEdgeChange} 
            />
            <input 
                type="number" 
                name="delay" 
                placeholder="Delay (ms)" 
                onChange={handleEdgeChange} 
            />
            <button onClick={addEdge}>Add Edge</button>
        </div>
    );
};

export default NodeEdgeForm;
