import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-cyan-600">
          Shadcn/ui - & - Clerk
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-purple-700 font-medium text-black text-xl cursor-pointer transition">Home</li>
          <li className="hover:text-purple-700 font-medium text-black text-xl cursor-pointer transition">About</li>
          <li className="hover:text-purple-700 font-medium text-black text-xl cursor-pointer transition">Services</li>
          <li className="hover:text-purple-700 font-medium text-black text-xl cursor-pointer transition">Contact</li>
        </ul>

        {/* DraK Mode */}
              <div>
                <ModeToggle />
              </div>
        

        {/* Buttons */}
       <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <div className="">
              <Show when="signed-in">
                <UserButton  />
              </Show>
            </div>
          </header>

      </div>
    </nav>
  );
};

export default Navbar;