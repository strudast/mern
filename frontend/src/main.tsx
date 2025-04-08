// Importing StrictMode from React to enable additional checks and warnings in development mode.
import { StrictMode } from "react";

// Importing createRoot from React DOM to create a root for rendering the React application.
import { createRoot } from "react-dom/client";

// Importing ChakraProvider to provide Chakra UI's theme and styling to the application.
import { ChakraProvider } from "@chakra-ui/react";

// Importing BrowserRouter to enable routing in the application.
import { BrowserRouter } from "react-router-dom";

// Importing the main App component, which serves as the root component of the application.
import App from "./App";

// Selecting the root element in the HTML where the React application will be mounted.
const rootElement = document.getElementById("root");

// Checking if the root element exists. If not, throw an error to ensure the application has a valid mount point.
if (!rootElement) {
  throw new Error(
    "Root element not found. Please ensure there is a div with id 'root' in your HTML."
  );
}

// Creating a React root and rendering the application inside it.
// StrictMode wraps the application to highlight potential problems in the code.
// BrowserRouter enables routing capabilities for navigation.
// ChakraProvider wraps the application to provide Chakra UI's styling and theming.
// The App component is the main entry point of the application.
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
