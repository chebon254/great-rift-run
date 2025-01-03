"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  // Calculate total quantity
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const navigation = [
    { name: "HOME", href: "/#top-nav" },
    { name: "MERCH", href: "/merch" },
    { name: "PROGRAMS", href: "/#programs-nav" },
    { name: "CONTACT", href: "/#contact-nav" },
  ];

  return (
    <nav className={`w-full bg-[#0a0f1400] ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.png"
                alt="Great Rift Run"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm md:px-5 lg:px-10 font-[family-name:var(--font-roboto-extrabold)] tracking-wider text-white transition-colors hover:text-gray-300"
                >
                  {item.name}
                </Link>
              ))}
              <Link href={"/cart"} className="relative">
                <Image src={"/cart.svg"} height={24} width={27} alt="Cart" />
                {totalQuantity > 0 && (
                  <div className="flex items-center justify-center h-[20px] w-[20px] rounded-full text-[12px] text-[#FFFFFF] bg-[#14AE5C] p-[2px] absolute -right-[10px] -top-[10px]">
                    {totalQuantity}
                  </div>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <div className="flex items-center">
              <Link href={"/cart"} className="relative mr-4">
                <Image src={"/cart.svg"} height={24} width={27} alt="Cart" />
                {totalQuantity > 0 && (
                  <div className="flex items-center justify-center h-[20px] w-[20px] rounded-full text-[12px] text-[#FFFFFF] bg-[#14AE5C] p-[2px] absolute -right-[10px] -top-[10px]">
                    {totalQuantity}
                  </div>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                <Image
                  src={"/bx-menu-alt-right.svg"}
                  alt="Open menu"
                  width={50}
                  height={50}
                />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
            {isOpen && (
              <div className="fixed inset-0 z-50 bg-white w-full">
                <div className="absolute top-6 right-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-black flex items-center justify-center h-[60px] w-[60px] rounded-full hover:bg-gray-100 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
                <div className="flex flex-col justify-center h-full w-full mx-auto space-y-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-center text-3xl font-[family-name:var(--font-roboto-extrabold)] text-black hover:bg-gray-100 py-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}