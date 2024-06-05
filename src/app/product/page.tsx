'use client'

import { fetchProductsData } from "@/services/product";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import Link from "next/link";

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const user = { username: 'user', password: 'password' }; // Sustituye con los datos del usuario real
                const productsData = await fetchProductsData(user);
                if (productsData) {
                    setProducts(productsData);
                } else {
                    setError('Products not found');
                }
            } catch (err) {
                setError('Failed to fetch product data');
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return <div className="text-center py-4">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-4 text-red-500">{error}</div>;
    }

    if (!products) {
        return <div className="text-center py-4">Products not found</div>;
    }

    return (
        <div>
            <h1 className="text-center py-4">Products</h1>
            <ol className="grid sm:grid-cols-2 md:grid-cols-3 lg: xl:grid-cols-4 2xl:grid-cols-5">
                {products.map(product => (
                    <li key={product.id} className="card m-4 bg-base-100 shadow-xl">
                        <Link href={`/product/${product.id}`} className="card-body items-center no-underline">
                            <h2 className="card-title">{product.name}</h2>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>Supplier: {product.supplier}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ProductsPage;
