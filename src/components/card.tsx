// Import the `Image` component from Next.js for optimized image rendering.
import Image from "next/image";
// Import the `Link` component from Next.js for client-side navigation.
import Link from "next/link";

// Define the type for the `Card` component's props.
interface CardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  colors: number;
  category: string;
  label?: string;
}

// Define the `Card` component to display product details.
const Card = ({ id, name, image, price, colors, category, label = 'Just in' }: CardProps) => {
  return (
    <div className="max-w-[20.7rem]">
      {/* Link to the product details page using the product ID. */}
      <Link href={`/product/${id}`}>
        {/* Display the product image with optimized loading and specified dimensions. */}
        <Image src={image} alt={name} height={330} width={330} />
      </Link>

      {/* Display product details such as label, name, category, and available colors. */}
      <div className="flex flex-col mt-4 text-md capitalize">
        {/* Highlighted label for the product, e.g., 'Just in'. */}
        <span className="text-[#9e3500] font-semibold">{label}</span>

        {/* Link to the product page with the product name as clickable text. */}
        <Link href={`/product/${id}`} className="font-semibold hover:underline">
          {name}
        </Link>

        {/* Display the category of the product. */}
        <span className="text-[#757575]">{category}</span>

        {/* Display the number of available colors with appropriate singular/plural form. */}
        <span className="text-[#757575]">
          {colors} {colors === 1 ? 'Color' : 'Colors'}
        </span>
      </div>

      {/* Display the price of the product with proper formatting. */}
      <span className="text-md font-semibold my-4 block">MRP : ₹ {price}.00</span>
    </div>
  );
};

// Export the `Card` component as the default export.
export default Card;
