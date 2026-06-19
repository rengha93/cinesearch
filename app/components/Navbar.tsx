"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <Link href="/" className="text-lg font-medium">
        <span className="text-gray-900">cine</span>
        <span className="text-red-500">search</span>
      </Link>
      <nav className="text-sm text-gray-500 flex gap-6">
        {!isHome ? (
          <button
            onClick={() => router.back()}
            className="hover:text-gray-900 cursor-pointer"
          >
            ← Back
          </button>
        ) : (
          <>
            <Link href="/search" className="hover:text-gray-900">
              search
            </Link>
            <Link href="/" className="hover:text-gray-900">
              trending
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
