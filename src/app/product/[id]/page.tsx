'use client';

import { useEffect, useState } from 'react';
import { fetchProductData } from '@/services/product';
import { Product } from '@/types/product';

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await fetchProductData(params.id);
        if (productData) {
          setProduct(productData);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to fetch product data');
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [params.id]);

  if (loading) return <div className="text-center py-4">Loading...</div>;

  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  if (!product) return <div className="text-center py-4">Product not found</div>;

  return (
    <div className="card m-4 bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <h2 className="lg:card-title text-bold">{product.name}</h2>
        <div className="flex-col">
        <p className="max-sm:text-xs sm:text-sm md:text-base"><strong>Supplier:</strong> {product.supplier}</p>
        <p className="max-sm:text-xs sm:text-sm md:text-base"><strong>Price: </strong>${product.price}</p>
        <p className="mb-2"><strong>Type:</strong> {product.productType}</p>
        <p className="mb-2"><strong>Quantity:</strong> {product.quantity}</p>
        <p className="mb-2"><strong>SKU:</strong> {product.SKU}</p>
        <p className="mb-2">
          <strong>Location:</strong> {product.geoCoordinates.latitude}, {product.geoCoordinates.longitude}
        </p>
        </div>
        <div className="card-actions justify-end">
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-secondary">Delete</button>
    </div>
      </div>
    </div>

  );
};

export default ProductPage;
