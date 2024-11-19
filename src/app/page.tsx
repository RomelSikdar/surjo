"use client";

import {
  ChevronLeft,
  ChevronDown,
  Share2,
  Bookmark,
  MoreVertical,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  // Function to handle button click
  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
    // Add additional functionality based on the button clicked
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-4">
          <ChevronLeft className="w-6 h-6" />
          <ChevronDown className="w-6 h-6" />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-sm font-semibold">Web Design &...</h1>
          <p className="text-xs text-gray-400">unicorn from heaven.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <Share2 className="w-6 h-6" />
          <Bookmark className="w-6 h-6" />
          <MoreVertical className="w-6 h-6" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Logo */}
        <div className="bg-blue-500 w-32 h-32 mx-auto -mb-16 rotate-45 transform origin-bottom-right">
          <div className="w-full h-full flex items-center justify-center -rotate-45">
            <span className="text-2xl font-bold">Unicorn Heaven</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 pt-20 pb-10 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            Responsive Website Design Services
          </h2>
          <p className="text-sm mb-6">
            SEO & Mobile-friendly Website, Bootstrap, Responsive Web Templates
            with adaptive grid, Convert non - responsive web pages to
            responsive.
          </p>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full"
            onClick={() => handleButtonClick("Quote Now")}
          >
            Quote Now
          </Button>
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? "bg-blue-400" : "bg-blue-800"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-yellow-500 p-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            SERVICE WE PROVIDE
          </h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-blue-400">
              Responsive Website along with designing
            </h4>
            <p className="text-sm text-center mt-2">
              We design & creat websites with 100% all device compatibility.
            </p>
          </div>
        </section>
      </main>

      {/* Navigation */}
      <nav className="flex justify-around py-2 bg-gray-800">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleButtonClick("Home")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleButtonClick("Search")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleButtonClick("Profile")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Button>
      </nav>
    </div>
  );
}
