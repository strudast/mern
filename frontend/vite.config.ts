// Import the React plugin for Vite, which uses SWC for faster builds and transformations.
import react from "@vitejs/plugin-react-swc";

// Import the `defineConfig` function from Vite to define the configuration in a type-safe way.
import { defineConfig } from "vite";

// Import the `vite-tsconfig-paths` plugin to automatically resolve paths defined in the `tsconfig.json` file.
import tsconfigPaths from "vite-tsconfig-paths";

// Export the Vite configuration using `defineConfig` for better TypeScript support.
export default defineConfig({
  // Specify the plugins to be used by Vite.
  plugins: [
    react(), // Enables React support with SWC for faster development and builds.
    tsconfigPaths(), // Resolves TypeScript path aliases defined in `tsconfig.json`.
  ],
  server: {
    // Configure the development server.
    proxy: {
      // Set up a proxy for API requests to avoid CORS issues during development.
      "/api": {
        target: "http://localhost:5000", // Redirects requests starting with `/api` to the backend server running on port 5000.
      },
    },
  },
});
