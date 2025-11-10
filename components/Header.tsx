"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <nav>
        <Link href="#" className="mr-4">Home</Link>
        <Link href="#" className="mr-4">About</Link>
        <Link href="#" className="mr-4">Contact</Link>
      </nav>
    </header>
  );
}