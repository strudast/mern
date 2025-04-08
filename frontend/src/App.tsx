// Importing necessary components and hooks from Chakra UI and React Router DOM
import { Box, useColorModeValue } from "@chakra-ui/react"; // Box is a layout component, and useColorModeValue is a hook to handle light/dark mode colors
import { Route, Routes } from "react-router-dom"; // Route and Routes are used for defining and managing application routes
import HomePage from "@/pages/HomePage"; // Importing the HomePage component for the "/" route
import CreatePage from "@/pages/CreatePage"; // Importing the CreatePage component for the "/create" route
import Navbar from "@/components/Navbar"; // Importing the Navbar component to display the navigation bar

// Defining the main App component
const App: React.FC = () => {
  return (
    <>
      {/* Box is a container that spans the full height of the viewport and adjusts its background color based on the color mode */}
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        {/* Rendering the Navbar component at the top of the page */}
        <Navbar />
        {/* Defining the application routes */}
        <Routes>
          {/* Route for the home page, rendering the HomePage component when the path is "/" */}
          <Route path="/" element={<HomePage />} />
          {/* Route for the create page, rendering the CreatePage component when the path is "/create" */}
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  );
};

// Exporting the App component as the default export
export default App;
