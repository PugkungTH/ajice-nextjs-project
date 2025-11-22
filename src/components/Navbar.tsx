"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/", label: "หน้าแรก" },
    { href: "/about", label: "เกี่ยวกับ" },
    { href: "/products", label: "สินค้า" },
    { href: "/blog", label: "บล็อก" },
    { href: "/contact", label: "ติดต่อ" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Ajice
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-gray-600 focus:outline-none"
        >
          ☰
        </button>

        <div className={`${open ? "block" : "hidden"} sm:flex space-x-4`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg ${
                pathname === link.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
