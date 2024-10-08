 Demo of My Assignmnet = https://drive.google.com/file/d/16zuzgt5sh4X56q_u_FCzTImiDUNEx-d-/view?usp=sharing
 
 
![image](https://github.com/user-attachments/assets/2bef2660-d197-4972-a437-3a04124dee76)

**The Service Map Visualizer is a project designed to graphically represent a system of interconnected services and their interactions. Here’s an overview of the assignment, including its objectives and components:**

**Objectives:**

   **1)Visual Representation:** Create a dynamic, interactive graph that visualizes services and their connections, enabling users to understand the      
       relationships and performance metrics of various services in a system.
       
   **2)Error and Success Metrics:** Represent service performance visually, with specific emphasis on error rates. This includes using colored borders around              nodes to indicate the success vs. error ratio.
   
   **3)Interactivity:** Provide a user-friendly interface that allows users to interact with the graph, such as clicking on nodes to view detailed service                 information.

**Components:**

   **1) Graph Initialization:**
         
   **a)Cytoscape Integration:** Use the Cytoscape library to initialize and render the graph with nodes and edges.
   
   **b)Dynamic Styling:** Apply styles to nodes and edges, including borders that reflect error rates and success metrics.
             
  **2)Data Management:**
           
   **a)Context Management:** Utilize React Context (MapContext) to manage and provide service and connection data across the application.
  
   **b)Data Retrieval:** Fetch service and connection data from JSON files or an API.
             
  **3)UI Components:**
           
   **a)NodeEdgeForm:** A form component for adding nodes and edges to the graph. Includes fields for node attributes (ID, label, category, etc.) and edge                  attributes (source, target, requests, delay).
   
   **b)ServiceInfoPanel:** Displays detailed information about a selected service. Shows metrics such as requests, failures, and success rate.
   
   **c)SystemMapView:** Renders the graph and handles user interactions, such as clicking on nodes to select them.

   **4)Styling:**
   
   **1aCSS Styling:** Use CSS to style various elements of the application, including the graph container, service info panel, and node/edge styles.
   
   **b)Error Representation:** Implement visual indicators (e.g., colored borders) to represent error rates, with red indicating 100% errors and green                     indicating 100% success.
             
   **5)Error Representation:**
          
   **a)Border Color Calculation:** Dynamically adjust the border color of nodes based on the error ratio. Use a color gradient from green (for success) to                 red (for errors).
