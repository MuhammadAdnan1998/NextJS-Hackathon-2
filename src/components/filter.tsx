// Import necessary components from Next.js and UI library.
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

// Define the interface for Filter component props.
interface FilterProps {
  showFilter: boolean; // Boolean to toggle the visibility of the filter panel.
}

// Define the Filter component which renders a sidebar with filter options.
const Filter = ({ showFilter }: FilterProps) => {
  return (
    <div className={cn("min-w-[12.5rem]", showFilter ? "block" : "hidden")}>
      {/* Filter section with a fixed width, visibility controlled by showFilter prop */}

      {/* Category links list */}
      <div className="h-96 pl-4 overflow-auto">
        <ul className="flex flex-col gap-2 text-md font-semibold">
          {/* List of categories for product filtering */}
          <li><Link href=''>Shoes</Link></li>
          <li><Link href=''>Sports bars</Link></li>
          <li><Link href=''>Top & t-shirts</Link></li>
          <li><Link href=''>Hoodies & sweatshirt</Link></li>
          <li><Link href=''>Jackets</Link></li>
          <li><Link href=''>Trousers & tights</Link></li>
          <li><Link href=''>Shorts</Link></li>
          <li><Link href=''>Tracksuits</Link></li>
          <li><Link href=''>Jumpsuits & rompers</Link></li>
          <li><Link href=''>Skirts & dresses</Link></li>
          <li><Link href=''>Socks</Link></li>
          <li><Link href=''>Accessories & equipment</Link></li>

          {/* Repeat category links for more options */}
          <li><Link href=''>Shoes</Link></li>
          <li><Link href=''>Sports bars</Link></li>
          <li><Link href=''>Top & t-shirts</Link></li>
          <li><Link href=''>Hoodies & sweatshirt</Link></li>
          <li><Link href=''>Jackets</Link></li>
          <li><Link href=''>Trousers & tights</Link></li>
          <li><Link href=''>Shorts</Link></li>
          <li><Link href=''>Tracksuits</Link></li>
          <li><Link href=''>Jumpsuits & rompers</Link></li>
          <li><Link href=''>Skirts & dresses</Link></li>
          <li><Link href=''>Socks</Link></li>
          <li><Link href=''>Accessories & equipment</Link></li>
        </ul>
      </div>

      {/* Separator between categories and accordion filters */}
      <Separator className="mt-8" />

      {/* Accordion component for filters */}
      <Accordion type="multiple">
        {/* Gender filter */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold">Gender</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            {/* Gender checkboxes */}
            <div className="flex gap-2"><Checkbox id="men" /><Label htmlFor="men">Men</Label></div>
            <div className="flex gap-2"><Checkbox id="women" /><Label htmlFor="women">Women</Label></div>
            <div className="flex gap-2"><Checkbox id="unisex" /><Label htmlFor="unisex">Unisex</Label></div>
          </AccordionContent>
        </AccordionItem>

        {/* Kids filter */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold">Kids</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            {/* Kids checkboxes */}
            <div className="flex gap-2"><Checkbox id="boys" /><Label htmlFor="boys">Boys</Label></div>
            <div className="flex gap-2"><Checkbox id="girls" /><Label htmlFor="girls">Girls</Label></div>
          </AccordionContent>
        </AccordionItem>

        {/* Price filter */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold">Shop By Price</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-2">
            {/* Price range checkboxes */}
            <div className="flex gap-2"><Checkbox id="low" /><Label htmlFor="low">Under ₹ 2 500.00</Label></div>
            <div className="flex gap-2"><Checkbox id="high" /><Label htmlFor="high">₹ 2 501.00 - ₹ 7 500.00</Label></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
}

// Export the Filter component as the default export.
export default Filter;
