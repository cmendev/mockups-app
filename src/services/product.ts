import { Product } from '@/types/product';
import { User } from '@/types/user';
import { mockProducts } from './productjson';

// const API_URL = 'https://api.ficticia.com/products';

export const fetchProductsData = async (user: User): Promise<Product[] | null> => {
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

// const mockProduct: Product = {
//     id: '1',
//     name: 'Macbook Air 13 M1',
//     productType: 'Laptop Mac',
//     quantity: 10,
//     price: 1799.99,
//     SKU: 'ELEC-001',
//     supplier: 'Apple',
//     geoCoordinates: {
//         latitude: 37.7749,
//         longitude: -122.4194,
//     },
// };

export const fetchProductData = async (productId: string): Promise<Product | null> => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate fetching the product based on the productId
    const product = mockProducts.find(product => product.id === productId);
    return product || null;
};
