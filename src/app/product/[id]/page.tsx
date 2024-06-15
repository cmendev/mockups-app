'use client';

import { useEffect, useState } from 'react';
import { fetchProductData } from '@/services/product';
import { Product } from '@/types/product';
import Modal from '@/components/Modal';

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

  const handleOpenModal = () => {
    const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
    modal.showModal();
  };

  const handleConfirm = () => {
    console.log('Confirmed');
    const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
    modal.close();
  };

  const handleCancel = () => {
    console.log('Cancelled');
    const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
    modal.close();
  };

  if (loading) return (
    <li className='list-none m-4'>
      <div className="flex flex-col gap-4 p-6">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </li>
  );

  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  if (!product) return <div className="text-center py-4">Product not found</div>;

  return (
    <>
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
            <button onClick={handleOpenModal} className="btn btn-secondary">Delete</button>
          </div>
        </div>
      </div>
      <Modal
        id="my_modal_5"
        title="You are about to delete this product"
        message="By deleting this product, it will be permanently removed and there will be no way to recover it again. are you sure you want to delete it?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default ProductPage;
