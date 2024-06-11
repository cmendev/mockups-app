'use client'

import { fetchProductsData } from "@/services/product";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/Skeleton";

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProductsData();
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
        return <div className="hero-content flex-col"> <h1 className="text-center py-4">Products</h1> <Skeleton /> </div>;
    }

    if (error) {
        return <div className="text-center py-4 text-red-500">{error}</div>;
    }

    if (!products) {
        return <div className="text-center py-4">Products not found</div>;
    }

    return (
        <div className="hero-content flex-col">
            <h1 className="text-center py-4">Products</h1>
            <ol className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map(product => (
                    <li key={product.id} className="card m-4 bg-base-100 shadow-xl">
                        <Link href={`/product/${product.id}`} className="card-body p-6 no-underline">
                            <h2 className="lg:card-title text-bold">{product.name}</h2>
                            <p className="max-sm:text-xs sm:text-sm md:text-base">{product.supplier}</p>
                            <p className="max-sm:text-xs sm:text-sm md:text-base">Price: ${product.price.toFixed(2)}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ProductsPage;
