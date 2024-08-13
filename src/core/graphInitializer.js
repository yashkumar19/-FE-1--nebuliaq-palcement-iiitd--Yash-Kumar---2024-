import cytoscape from 'cytoscape';

export const initializeGraph = (containerId, nodeData, edgeData) => {
    return cytoscape({
        
        container: document.getElementById(containerId),    // Specify the container element where the graph will be rendered

        elements: [
            ...nodeData.map(service => ({
                data: { id: service.id, label: service.label },
                classes: 'node-class', 
                position: { x: Math.random() * 500, y: Math.random() * 500 }  // Assign random positions for initial layout
            })),
            ...edgeData.map(connection => ({
                data: { 
                    source: connection.source, 
                    target: connection.target, 
                    label: `${connection.requests} calls, ${connection.delay}ms` 
                },
                classes: 'edge-class' 
            }))
        ],

        layout: { 
            name: 'grid', 
            rows: 3 //  rows for grid layout
        },

        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#76b7b2', 
                    'label': 'data(label)', 
                    'text-valign': 'center', 
                    'text-halign': 'center', 
                    'font-size': '14px', 
                    'padding': "10px", 
                    'text-outline-color': '#ffffff',
                    'text-outline-width': '2px'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': '4px',
                    'line-color': 'orange', 
                    'curve-style': 'bezier', 
                    'target-arrow-color': 'blue', 
                    'target-arrow-shape': 'triangle', 
                    'label': 'data(label)',
                    'font-size': '10px', 
                    'text-outline-color': '#fff',
                    'text-outline-width': '2px' 
                }
            }
        ]
    });
};
