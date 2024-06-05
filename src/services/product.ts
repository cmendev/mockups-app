import { Product } from '@/types/product';
import { User } from '@/types/user';

// const API_URL = 'https://api.ficticia.com/products';

// export const fetchProductData = async (user: User, productId: string): Promise<Product | null> => {
//     try {
//         const response = await fetch(`${API_URL}/${productId}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Basic ${btoa(`${user.username}:${user.password}`)}`
//             }
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const product: Product = await response.json();
//         return product;
//     } catch (error) {
//         console.error('Error fetching product data:', error);
//         return null;
//     }
// };

const mockProduct: Product = {
    id: '1',
    name: 'Sample Product',
    productType: 'Electronics',
    quantity: 10,
    price: 99.99,
    SKU: 'ELEC-001',
    supplier: 'Sample Supplier',
    geoCoordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  };
  
  export const fetchProductData = async (user: User, productId: string): Promise<Product | null> => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Simulate fetching the product based on the productId
    if (productId === mockProduct.id) {
      return mockProduct;
    } else {
      return null;
    }
  };
