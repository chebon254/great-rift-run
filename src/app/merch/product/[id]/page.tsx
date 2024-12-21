//src/app/merch/product/[id]/page.tsx

"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";
import { useCart } from "@/context/CartContext";
import { Product } from "../../../../../types/product";

function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedCapacity, setSelectedCapacity] = useState("500ML");

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${resolvedParams.id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [resolvedParams.id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageURL1: product.imageURL1 || "",
      quantity,
      category: product.category,
      ...(product.category !== "WATER" && {
        size: selectedSize,
        color: product.color,
        material: product.material,
      }),
      ...(product.category === "WATER" && {
        capacity: selectedCapacity,
      }),
    };

    addToCart(cartItem);
  };

  const isFormValid = () => {
    if (product.category === "WATER") {
      return selectedCapacity !== "";
    } else {
      return selectedSize !== "";
    }
  };

  const productImages = [
    product.imageURL1,
    product.imageURL2,
    product.imageURL3,
    product.imageURL4,
  ].filter(Boolean) as string[];

  return (
    <>
      {/* Hero section */}
      <div
        className="h-[30vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-image.png)" }}
      >
        <div className="mx-auto max-w-7xl px-4 h-full flex justify-center items-center">
          <div className="h-fit text-left w-full px-4 md:px-8">
            <Link href={"/merch"} className="flex items-center justify-start">
              <Image
                src={"/arrow-left-white.svg"}
                height={54}
                width={64}
                alt="Great Rift Run"
                className="pr-3"
              />
              <div className="text-center text-[#FFFFFF] my-10 font-[family-name:var(--font-roboto-bold)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                MERCH/{product.category}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-md p-6 w-full">
          {/* Image Gallery */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src={productImages[activeImage] || "/300x300.png"}
                height={300}
                width={300}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev > 0 ? prev - 1 : productImages.length - 1
                      )
                    }
                    className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 h-[48px] w-[54px] rounded-sm p-2 cursor-pointer flex items-center justify-center"
                  >
                    <Image
                      src={"/left-grey-arrow.svg"}
                      height={25}
                      width={32}
                      alt="Previous"
                    />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev < productImages.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 h-[48px] w-[54px] rounded-sm p-2 cursor-pointer flex items-center justify-center"
                  >
                    <Image
                      src={"/right-grey-arrow.svg"}
                      height={25}
                      width={32}
                      alt="Next"
                    />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex items-center justify-center space-x-2">
              {productImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  height={60}
                  width={60}
                  alt={`${product.name} view ${index + 1}`}
                  className={`w-20 h-20 border-2 rounded-md cursor-pointer ${
                    activeImage === index ? "border-green-600" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div>
            <div className="relative">
              <div className="absolute top-0 right-0 border-[1px] border-[#14AE5C] py-1 px-[10px] font-[family-name:var(--font-roboto-bold)] text-[#14AE5C] text-lg">
                {product.inStock > 0 ? "IN STOCK" : "OUT OF STOCK"}
              </div>
              <h2 className="text-2xl font-[family-name:var(--font-roboto-bold)] text-[#000000]">
                {product.name}
              </h2>
              <p className="text-[#303030] mt-[25px] text-lg font-[family-name:var(--font-roboto-regular)]">
                {product.description}
              </p>
            </div>

            <div className="text-2xl mt-[40px] font-[family-name:var(--font-roboto-bold)] text-[#000000]">
              KES {product.price.toLocaleString()}
            </div>

            {/* Size Selection for non-WATER products */}
            {product.category !== "WATER" && (
              <div className="my-10">
                <div className="flex items-center -gap-[1px] w-full">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border transition w-1/5 ${
                        selectedSize === size
                          ? "bg-green-600 text-white"
                          : "hover:bg-green-600 hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Capacity Selection for WATER products */}
            {product.category === "WATER" && (
              <div className="my-10">
                <div className="flex items-center -gap-[1px] w-full">
                  {["500ML", "1L", "2L"].map((capacity) => (
                    <button
                      key={capacity}
                      onClick={() => setSelectedCapacity(capacity)}
                      className={`px-4 py-2 border transition w-1/3 ${
                        selectedCapacity === capacity
                          ? "bg-green-600 text-white"
                          : "hover:bg-green-600 hover:text-white"
                      }`}
                    >
                      {capacity}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="my-10">
              <div className="flex items-center justify-between -gap-[1px] rounded-md w-full">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2 py-4 border w-2/6 text-gray-700 hover:text-black"
                >
                  &minus;
                </button>
                <div className="w-2/6 py-4 border text-center flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  onClick={() =>
                    setQuantity((q) => Math.min(product.inStock, q + 1))
                  }
                  className="px-2 py-4 border w-2/6 text-gray-700 hover:text-black"
                >
                  +
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-sm text-gray-600 my-10">
              {product.category !== "WATER" ? (
                <>
                  <div className="flex items-center my-6 justify-between font-[family-name:var(--font-roboto-extrabold)] text-[20px]">
                    <span>Color:</span>
                    <span>{product.color}</span>
                  </div>
                  <div className="flex items-center my-6 justify-between font-[family-name:var(--font-roboto-extrabold)] text-[20px]">
                    <span>Material:</span>
                    <span>{product.material}</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center my-6 justify-between font-[family-name:var(--font-roboto-extrabold)] text-[20px]">
                  <span>Selected Capacity:</span>
                  <span>{selectedCapacity}</span>
                </div>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.inStock === 0 || !isFormValid()}
              className="w-full bg-green-600 text-white py-6 text-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      <Socials />
      <Footer />
    </>
  );
}

export default ProductDetail;
