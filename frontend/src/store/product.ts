import { create } from "zustand";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (newProduct: {
    name: string;
    price: number;
    imageUrl: string;
  }) => Promise<{ success: boolean; message: string }>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct: {
    name: string;
    price: number;
    imageUrl: string;
  }) => {
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl) {
      return { success: false, message: "Please fill all fields" };
    }
    // we only have /api/products because in vite.config we set the server->proxy to /api to target localhost:5000
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
  },
}));
