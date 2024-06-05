export interface Product {
    name: string;
    productType: string;
    quantity: number;
    price: number;
    SKU: string;
    supplier: string;
    geoCoordinates: {
        latitude: number;
        longitude: number;
    };
}