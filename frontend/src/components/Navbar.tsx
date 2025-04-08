import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react"; // Importing Chakra UI components for styling and layout
import { PlusSquareIcon } from "@chakra-ui/icons"; // Importing an icon from Chakra UI
import { Link } from "react-router-dom"; // Importing Link component for navigation
import { IoMoon } from "react-icons/io5"; // Importing moon icon for dark mode
import { LuSun } from "react-icons/lu"; // Importing sun icon for light mode
import { ReactNode } from "react"; // Importing ReactNode type for typing children prop

// Defining the props interface for the Navbar component
interface NavbarProps {
  children?: ReactNode; // Optional children prop to render additional content inside the Navbar
}

// Navbar functional component
function Navbar({ children }: NavbarProps) {
  const { colorMode, toggleColorMode } = useColorMode(); // Chakra UI hook to get the current color mode and toggle function

  return (
    <Container maxW="1140px" px={4}>
      {" "}
      {/* Container to center and constrain the Navbar's width */}
      <Flex
        h={16} // Height of the Navbar
        alignItems="center" // Vertically align items to the center
        justifyContent="space-between" // Space out items evenly
        flexDir={{ base: "column", sm: "row" }} // Responsive direction: column on small screens, row on larger screens
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }} // Responsive font size
          fontWeight="bold" // Bold text
          textTransform="uppercase" // Uppercase text
          textAlign="center" // Center-align text
          bgGradient="linear(to-r, cyan.400, blue.500)" // Gradient text color
          bgClip="text" // Clip the gradient to the text
        >
          <Link to="/">Product Store &#128722;</Link>{" "}
          {/* Link to the homepage with a shopping cart emoji */}
        </Text>

        <HStack spacing={2} alignItems="center">
          {" "}
          {/* Horizontal stack for buttons with spacing */}
          <Link to="/create">
            {" "}
            {/* Link to the "Create Product" page */}
            <Button aria-label="Create Product">
              {" "}
              {/* Button with an accessible label */}
              <PlusSquareIcon fontSize="20px" /> {/* Icon for the button */}
            </Button>
          </Link>
          <Button onClick={toggleColorMode} aria-label="Toggle Color Mode">
            {" "}
            {/* Button to toggle color mode */}
            {colorMode === "light" ? ( // Conditional rendering based on the current color mode
              <IoMoon size="20px" /> // Moon icon for dark mode
            ) : (
              <LuSun size="20px" /> // Sun icon for light mode
            )}
          </Button>
        </HStack>
      </Flex>
      {children} {/* Render any additional content passed as children */}
    </Container>
  );
}

export default Navbar; // Exporting the Navbar component as the default export
