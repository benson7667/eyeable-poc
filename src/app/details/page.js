"use client";

import { useRouter } from "next/navigation";
import Template from "../template";

export default function Details() {
  const router = useRouter();

  return (
    <main>
      <div className="min-h-screen flex flex-col bg-white flex-grow">
        <header className="flex">
          <button
            className="w-[55px] h-[55px] flex justify-center items-center text-gray-500"
            onClick={() => router.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="flex-grow text-center self-center text-gray-500">
            View GIRO arrangement
          </div>
          <div className="w-[55px] h-[55px] flex justify-center items-center text-gray-500"></div>
        </header>

        <div className="p-6">
          <div className="text-gray-500">Billing organisation</div>
          <div className="text-2xl font-semibold">Merchant name</div>

          <div className="mt-2">
            <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              In progress
            </span>
          </div>

          <div className="mb-1 text-gray-500 mt-4">Created on</div>
          <div className="font-semibold text-gray-600">1 Mar 2024</div>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <div className="p-6">
          <div className="mb-6">
            <div className="mb-1 text-gray-500">Billing reference number</div>
            <div className="font-semibold text-gray-600">123-456-789</div>
          </div>
          <div className="mb-6">
            <div className="mb-1 text-gray-500">Payment limit</div>
            <div className="font-semibold text-gray-600">100.00 SGD</div>
          </div>
          <div className="mb-6">
            <div className="mb-1 text-gray-500">Payment type</div>
            <div className="font-semibold text-gray-600">Pay full amount</div>
          </div>
          <div className="mb-6">
            <div className="mb-1 text-gray-500">Name</div>
            <div className="font-semibold text-gray-600">Ashley Tan</div>
          </div>
          <div className="mb-6">
            <div className="mb-1 text-gray-500">Contact number</div>
            <div className="font-semibold text-gray-600">1234 1234</div>
          </div>
          <div>
            <div className="mb-1 text-gray-500">From</div>
            <div className="font-semibold text-gray-600">360 Account</div>
            <div className="mb-1 text-gray-500">123-45678-999</div>
          </div>
        </div>
      </div>
      <Template />
    </main>
  );
}
