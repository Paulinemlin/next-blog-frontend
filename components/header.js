import React from "react";
import Link from "next/link";

const Header = ({homepage}) => {
  return (
    <main>
      <div>
        <div className="relative">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-lg sm:rounded-xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover bg-fixed"
                  src="https://images.unsplash.com/photo-1588777930357-fb171e43f7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">{homepage.hero.title}</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-yellow-200 sm:max-w-3xl">
                {homepage.hero.description}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
