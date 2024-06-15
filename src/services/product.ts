import { Product } from '@/types/product';
import { mockProducts } from '../utils/products';

// const API_URL = 'https://api.ficticia.com/products';

export const fetchProductsData = async (): Promise<Product[] | null> => {
    try {
        // Simulating API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate successful fetch
        return mockProducts;
    } catch (error) {
        console.error('Error fetching products data:', error);
        return null;
    }
};

export const fetchProductData = async (productId: string): Promise<Product | null> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const product = mockProducts.find(product => product.id === productId);
    return product || null;
};
