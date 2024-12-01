'use client';

import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';

export function Header() {
  return (
    <header className="bg-black">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block" href="#">
          <span className="sr-only">Home</span>
          <Image
            src="/logo-1.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-white transition hover:text-gray-100/75" href="/dashboard"> Dashboard </a>
              </li>
              <li>
                <a className="text-white transition hover:text-gray-100/75" href="#"> Careers </a>
              </li>
              <li>
                <a className="text-white transition hover:text-gray-100/75" href="#"> History </a>
              </li>
              <li>
                <a className="text-white transition hover:text-gray-100/75" href="#"> Services </a>
              </li>
              <li>
                <a className="text-white transition hover:text-gray-100/75" href="#"> Projects </a>
              </li>
              <li>
                <a className="text-white transition hover:text-gray-100/75" href="#"> Blog </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md  px-5 py-2.5 text-sm font-medium text-white transition"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-white px-5 py-2.5 text-sm font-medium text-blck transition hover:bg-slate-200 sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button
              className="block rounded bg-gray-800 p-2.5 text-white transition hover:bg-gray-700 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}