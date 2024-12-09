// Import utility functions and components
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define the interface for the product card props
interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
  size: 'sm' | 'lg';
}

// Functional component for the product card
const ProductCard = ({ image, name, price, category, size }: ProductCardProps) => {

  // Set the width based on the size prop (small or large)
  const px = size === 'sm' ? 300 : 441;

  return (
    <div style={{ width: px }} className="max-w-full px-4"> {/* Set dynamic width for the card */}
      
      <div className="relative w-full aspect-square"> {/* Maintain square aspect ratio for the image */}
        <Image className="rounded" src={image} alt={name} fill /> {/* Display product image */}
      </div>

      <div className={cn("flex justify-between mt-5", size === 'sm' ? 'pr-2' : 'pr-4')}> {/* Flex container for text and price */}
        
        <div className="flex flex-col">
          <h4 className="font-semibold text-md capitalize">{name}</h4> {/* Product name */}
          <span className="text-[#757575] capitalize">{category}</span> {/* Product category */}
        </div>

        <span className="font-semibold text-md min-w-16">₹ {price}</span> {/* Display product price */}
      </div>
    </div>
  )
}

// Export the ProductCard component for use in other parts of the application
export default ProductCard;
