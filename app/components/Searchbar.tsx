"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
  };

  return (
    <div className="flex justify-center gap-3">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search for movies..."
        className="border border-gray-200 rounded-md py-2 px-4 w-72 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Search
      </button>
    </div>
  );
}
