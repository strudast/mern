// Importing the custom hook `useProductStore` from the product store
import { useProductStore } from "@/store/product";
// Importing components and hooks from Chakra UI for UI design and functionality
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
// Importing the `useState` hook from React for managing component state
import { useState } from "react";

// Defining the `CreatePage` functional component
const CreatePage = () => {
  // Initializing state for the new product with default values
  const [newProduct, setNewProduct] = useState({
    name: "", // Product name
    price: 0, // Product price
    imageUrl: "", // Product image URL
  });

  // Chakra UI's toast hook for displaying notifications
  const toast = useToast();

  // Destructuring the `createProduct` function from the product store
  const { createProduct } = useProductStore();

  // Function to handle adding a new product
  const handleAddProduct = async () => {
    // Calling the `createProduct` function and awaiting the response
    const { success, message } = await createProduct(newProduct);

    // Displaying a toast notification based on the success status
    if (!success) {
      // If the product creation fails, show an error toast
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
        duration: 2000, // Toast duration in milliseconds
      });
    } else {
      // If the product creation succeeds, show a success toast
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
        duration: 2000, // Toast duration in milliseconds
      });
    }

    // Resetting the `newProduct` state to its initial values
    setNewProduct({ name: "", price: 0, imageUrl: "" });
  };

  // Returning the JSX structure for the CreatePage component
  return (
    // Container for the page content with a maximum width
    <Container maxW={"container.sm"}>
      {/* Vertical stack for spacing between elements */}
      <VStack spacing={8}>
        {/* Heading for the page title */}
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        {/* Box component for the form container */}
        <Box
          w={"full"} // Full width
          bg={useColorModeValue("white", "gray.800")} // Background color based on color mode
          p={6} // Padding
          rounded={"lg"} // Rounded corners
          shadow={"md"} // Medium shadow
        >
          {/* Vertical stack for form inputs */}
          <VStack spacing={4}>
            {/* Input field for the product name */}
            <Input
              placeholder="Product Name" // Placeholder text
              name="name" // Input name
              type="text" // Input type
              value={newProduct.name} // Binding the input value to the `newProduct.name` state
              onChange={
                (e) => setNewProduct({ ...newProduct, name: e.target.value }) // Updating the `name` field in the state
              }
            />
            {/* Input field for the product price */}
            <Input
              placeholder="Product Price" // Placeholder text
              name="price" // Input name
              type="number" // Input type
              value={newProduct.price} // Binding the input value to the `newProduct.price` state
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: parseFloat(e.target.value) || 0, // Updating the `price` field in the state
                })
              }
            />
            {/* Input field for the product image URL */}
            <Input
              placeholder="image Url" // Placeholder text
              name="imageUrl" // Input name
              type="text" // Input type
              value={newProduct.imageUrl} // Binding the input value to the `newProduct.imageUrl` state
              onChange={
                (e) =>
                  setNewProduct({ ...newProduct, imageUrl: e.target.value }) // Updating the `imageUrl` field in the state
              }
            />
            {/* Button to trigger the `handleAddProduct` function */}
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

// Exporting the `CreatePage` component as the default export
export default CreatePage;
