export const retrieveServiceData = async () => {
    try {
        // Fetch service data from the specified endpoint
        const response = await fetch('/servicesInfo.json');
        // Parse the JSON response
        const data = await response.json();
        // Log the retrieved services data for debugging purposes
        console.log('Services Data:', data.entities);
        // Return the services data
        return data.entities;
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error retrieving service data:', error);
        // Return an empty array in case of error to avoid breaking the application
        return [];
    }
};

export const retrieveConnectionData = async () => {
    try {
        const response = await fetch('/servicesInfo.json');
        const data = await response.json();
        console.log('Connections Data:', data.links);        // Log the retrieved connections data for debugging purposes
    
        return data.links;
    } catch (error) {
        console.error('Error retrieving connection data:', error);
        
        return [];       // Return an empty array in case of error to avoid breaking the application  
    }
};
