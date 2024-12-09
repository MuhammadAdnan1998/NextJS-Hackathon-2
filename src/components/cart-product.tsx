import React from 'react';
import { Button } from './ui/button';
import { HeartIcon, TrashIcon } from './icons';
import Image from 'next/image';

// Define the props interface for the CartProduct component
interface CartProductProps {
  image: string;
  name: string;
  category: string;
  colors: string;
  price: number;
  size: string;
  quantity: number;
}

// CartProduct component to display product details in the cart
const CartProduct = ({ image, name, category, colors, price, size, quantity }: CartProductProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 pt-4 pb-8 px-8 lg:px-0 border-b border-[#e5e5e5]">
      {/* Product image */}
      <div className="relative w-full md:w-40 aspect-square">
        <Image src={image} alt={name} fill />
      </div>

      {/* Product details and actions */}
      <div className="relative flex flex-col md:flex-row justify-between">

        {/* Left section: Product info */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-1">
            {/* Product name */}
            <h5 className="font-semibold">{name}</h5>
            {/* Product category */}
            <p className="text-[#757575]">{category}</p>
            {/* Product colors */}
            <p className="text-[#757575]">{colors}</p>

            {/* Product size and quantity */}
            <div className="flex gap-6">
              <span className="text-[#757575]">Size {size}</span>
              <span className="text-[#757575]">Quantity {quantity}</span>
            </div>

            {/* Action buttons: Wishlist and Delete */}
            <div className="mt-4 flex h-5">
              <Button variant="ghost" size="icon"><HeartIcon /></Button> {/* Add to wishlist */}
              <Button variant="ghost" size="icon"><TrashIcon /></Button> {/* Remove from cart */}
            </div>
          </div>
        </div>

        {/* Right section: Product price */}
        <span className="absolute right-0 bottom-2 md:static">MRP: ₹ {price}.00</span>
      </div>
    </div>
  );
};

export default CartProduct;
