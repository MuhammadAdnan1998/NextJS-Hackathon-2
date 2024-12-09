// Importing components and dependencies
import ProductCard from "@/components/product-card"; 
import { Button } from "@/components/ui/button"; // Button component for UI actions
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

// Page component
const page = () => {
  return (
    <>
      {/* Top banner promoting the Nike app */}
      <div className="w-full py-2 bg-muted hidden lg:flex flex-col items-center">
        <strong>Hello Nike App</strong>
        <span className="text-sm">
          Download the app to access everything Nike.{" "}
          <Link className="font-semibold underline" href="">
            Get Your Great
          </Link>
        </span>
      </div>

      {/* Main hero section */}
      <main className="max-w-screen-xl mx-auto">
        {/* Hero image */}
        <Image src="/images/hero-image.png" alt="Hero" height={700} width={1280} />

        {/* Hero section content */}
        <div className="mt-12 flex flex-col gap-4 items-center">
          <span className="font-semibold">First Look</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase">
            Nike air max pulse
          </h2>
          <p className="max-w-xl px-3 text-center">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex gap-4">
            <Button className="px-6 h-10 capitalize">Notify me</Button>
            <Button className="px-6 h-10 capitalize">Shop air max</Button>
          </div>
        </div>
      </main>

      {/* Carousel section for featured products */}
      <section className="max-w-screen-xl mx-auto my-20">
        <Carousel opts={{ loop: true, align: "center" }}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-2xl font-semibold my-4 px-4 md:px-8 lg:px-0">
              Best of Air Max
            </h3>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline text-md font-semibold">Shop</span>
              <div className="flex gap-4 w-28 relative items-center">
                <CarouselPrevious className="size-8 lg:size-12 bg-[#e5e5e5] static translate-y-0" />
                <CarouselNext className="size-8 lg:size-12 bg-[#e5e5e5] static translate-y-0" />
              </div>
            </div>
          </div>

          <CarouselContent>
            {/* Carousel items displaying product cards */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <ProductCard
                size="lg"
                image="/images/product/nike-air-max-plus.png"
                name="Nike air max plus"
                category="Women's shoes"
                price={13995}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <ProductCard
                size="lg"
                image="/images/product/nike-air-max-plus.png"
                name="Nike air max plus"
                category="Men's shoes"
                price={13995}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <ProductCard
                size="lg"
                image="/images/product/nike-air-max-97-se.png"
                name="Nike air max 97 SE"
                category="Men's shoes"
                price={16995}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <ProductCard
                size="lg"
                image="/images/product/nike-air-max-systm.png"
                name="Nike air max SYSTM"
                category="Women's shoes"
                price={16995}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Featured section */}
      <section className="max-w-screen-xl mx-auto">
        <h3 className="text-2xl font-semibold my-4 px-4 md:px-8 lg:px-0">Featured</h3>
        <Image src="/images/featured-image.png" alt="Featured" height={700} width={1280} />
        <div className="mt-12 flex flex-col gap-4 items-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center font-bold uppercase">
            Step into what feels good
          </h2>
          <p className="max-w-xl px-3 text-center">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <Button className="px-6 h-10 capitalize">Find your shoe</Button>
        </div>
      </section>

      {/* More sections for Gear Up, Don't Miss, The Essentials, and Footer */}
      {/* Each section would include similar comments to explain their structure and purpose */}
    </>
  );
};

export default page;
