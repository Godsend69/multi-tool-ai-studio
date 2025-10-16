"use client"

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Page loaded!');
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Multi-Tool AI Studio</h1>
      <p className="text-xl mb-8">Welcome to my magical 3D realm!</p>
      <button className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700">
        Enter the Realm
      </button>
    </main>
  );
}
