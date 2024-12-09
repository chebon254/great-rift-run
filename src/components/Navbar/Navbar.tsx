'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROGRAMS', href: '/programs' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0f1400]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg"
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
            <div className="ml-10 flex items-center space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm px-10 font-[family-name:var(--font-roboto-extrabold)] tracking-wider text-white transition-colors hover:text-gray-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              <Image src={'/bx-menu-alt-right.svg'} alt='' width={50} height={50} />
              <span className="sr-only">Open menu</span>
            </button>
            {isOpen && (
              <div className="absolute right-0 w-[300px] bg-[#0a0f1433] mt-6 py-6 px-3">
                <div className="space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block px-6 py-2 text-[24px] font-[family-name:var(--font-roboto-extrabold)] text-white hover:bg-gray-800"
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
  )
}
