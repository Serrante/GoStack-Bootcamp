import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await AsyncStorage.getItem('@GoMarketplace:cart');

      if (response) {
        setProducts(JSON.parse(response));
      }
    }

    loadProducts();
  }, []);

  const sendToStorage = useCallback(async () => {
    await AsyncStorage.setItem(
      '@GoMarketplace: Cart',
      JSON.stringify(products),
    );
  }, [products]);

  const addToCart = useCallback(
    async product => {
      const productId = products.find(prod => prod.id === product.id);

      if (productId) {
        increment(product.id);
        return;
      }

      product.quantity = 1;

      setProducts(state => [...state, product]);
      sendToStorage();
    },
    [increment, products, sendToStorage],
  );

  const increment = useCallback(
    async id => {
      const incrementProducts = products.map(product => {
        if (product.id === id) {
          product.quantity += 1;
        }

        return product;
      });

      setProducts(incrementProducts);
      sendToStorage();
    },
    [products, sendToStorage],
  );

  const decrement = useCallback(
    async id => {
      const decrementProducts = products
        .map(product => {
          if (product.id === id) {
            product.quantity -= 1;
          }

          return product;
        })
        .filter(product => product.quantity >= 1);

      setProducts(decrementProducts);
      sendToStorage();
    },
    [products, sendToStorage],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
