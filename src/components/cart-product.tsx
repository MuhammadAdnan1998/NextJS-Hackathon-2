// Import necessary components and icons.
import React from 'react';
import { Button } from './ui/button';
import { HeartIcon, TrashIcon } from './icons';
import Image from 'next/image';

// Define the interface for CartProduct component props.
interface CartProductProps {
  image: string;
  name: string;
  category: string;
  colors: string;
  price: number;
  size: string;
  quantity: number;
}

// Define the CartProduct component to display product details in the cart.
const CartProduct = ({ image, name, category, colors, price, size, quantity }: CartProductProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 pt-4 pb-8 px-8 lg:px-0 border-b border-[#e5e5e5]">
      {/* Product image section with responsive aspect ratio */}
      <div className="relative w-full md:w-40 aspect-square">
        {/* Display the product image using Next.js Image component */}
        <Image src={image} alt={name} fill />
      </div>

      <div className="relative flex flex-col md:flex-row justify-between">
        {/* Product details section */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-1">
            {/* Product name */}
            <h5 className="font-semibold">{name}</h5>

            {/* Product category */}
            <p className="text-[#757575]">{category}</p>

            {/* Available colors for the product */}
            <p className="text-[#757575]">{colors}</p>

            {/* Size and quantity of the product in the cart */}
            <div className="flex gap-6">
              <span className="text-[#757575]">Size {size}</span>
              <span className="text-[#757575]">Quantity {quantity}</span>
            </div>

            {/* Action buttons for product (like and delete) */}
            <div className="mt-4 flex h-5">
              <Button variant="ghost" size="icon">
                {/* Heart icon for like action */}
                <HeartIcon />
              </Button>
              <Button variant="ghost" size="icon">
                {/* Trash icon for delete action */}
                <TrashIcon />
              </Button>
            </div>

          </div>
        </div>

        {/* Display the price of the product in the cart */}
        <span className="absolute right-0 bottom-2 md:static">MRP: ₹ {price}.00</span>
      </div>
    </div>
  )
}

// Export the CartProduct component as the default export.
export default CartProduct;
