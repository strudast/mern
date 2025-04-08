import { create } from "zustand"; // Import the `create` function from Zustand to create a state management store. Zustand is used for its simplicity and lightweight nature compared to other state management libraries.

// Define the structure of a Product object
interface Product {
  id: string; // Unique identifier for the product, needed to distinguish products in the store.
  name: string; // Name of the product, required to display and identify the product.
  price: number; // Price of the product, necessary for pricing and calculations.
  imageUrl: string; // URL of the product's image, used to display the product visually in the UI.
}

// Define the structure of an API response
interface ApiResponse<T> {
  success: boolean; // Indicates if the API request was successful, needed to handle success or failure logic.
  message: string; // Message returned by the API, useful for providing feedback to the user.
  data?: T; // Optional data returned by the API, used to process the response when available.
}

// Define the structure of the Zustand store for managing products
interface ProductStore {
  products: Product[]; // Array of products in the store, used to manage and display the list of products.
  setProducts: (products: Product[]) => void; // Function to update the products in the store, needed to modify the state when new data is available.
  createProduct: (newProduct: {
    name: string; // Name of the new product, required for creating a product.
    price: number; // Price of the new product, required for creating a product.
    imageUrl: string; // Image URL of the new product, required for creating a product.
  }) => Promise<{ success: boolean; message: string }>; // Function to create a new product and return a success status and message, needed to handle product creation logic.
}

// Create the Zustand store for managing products
export const useProductStore = create<ProductStore>((set) => ({
  products: [], // Initialize the products array as empty. This is the initial state of the store.

  // Function to update the products in the store
  setProducts: (products) => set({ products }), // Allows updating the `products` state, needed to reflect changes in the UI when products are added or modified.

  // Function to create a new product
  createProduct: async (newProduct: {
    name: string; // Name of the new product, required for validation and API request.
    price: number; // Price of the new product, required for validation and API request.
    imageUrl: string; // Image URL of the new product, required for validation and API request.
  }) => {
    // Validate that all required fields are provided
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl) {
      return { success: false, message: "Please fill all fields" }; // Prevents sending incomplete data to the API, ensuring proper validation.
    }

    try {
      // Send a POST request to the API to create a new product
      const res = await fetch("/api/products", {
        method: "POST", // HTTP method for creating a resource.
        headers: {
          "Content-Type": "application/json", // Specifies that the request body is in JSON format, required for the API to parse the data correctly.
        },
        body: JSON.stringify(newProduct), // Convert the new product data to JSON, needed to send it in the request body.
      });

      // Check if the response is not OK (status code not in the 200-299 range)
      if (!res.ok) {
        const errorData: ApiResponse<null> = await res.json(); // Parse the error response to extract the message.
        return {
          success: false, // Indicates failure to the caller.
          message: errorData.message || "Failed to create product", // Provides feedback on why the request failed.
        };
      }

      // Parse the successful response
      const data: ApiResponse<Product> = await res.json();
      if (data.success && data.data) {
        // If the API indicates success and returns product data
        set((state) => ({
          products: [...state.products, data.data as Product], // Add the new product to the store, ensuring the UI reflects the updated state.
        }));
        return { success: true, message: "Product created successfully" }; // Indicates success to the caller.
      } else {
        // Handle cases where the API does not indicate success
        return {
          success: false, // Indicates failure to the caller.
          message: data.message || "Failed to create product", // Provides feedback on why the request failed.
        };
      }
    } catch (error) {
      // Handle any errors that occur during the API request
      return {
        success: false, // Indicates failure to the caller.
        message: "An error occurred while creating the product: " + error, // Provides detailed feedback on the error.
      };
    }
  },
}));
