"use client";
import { useEffect } from "react";
import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex gap-8">
        <a
          href="/site1"
          className="bg-black text-white px-10 py-4 text-lg font-semibold "
        >
          Go to Site 1
        </a>
        <a
          href="/site2"
          className="bg-primary-site2 text-white px-10 py-4 text-lg font-semibold"
        >
          Go to Site 2
        </a>
      </div>
    </div>
  );
}
