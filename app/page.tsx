import { getTrending, IMAGE_BASE_URL } from "@/lib/tmdb";
import SearchBar from "./components/Searchbar";
import Link from "next/link";

export default async function Home() {
  const movies = await getTrending();
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <div className="text-center min-w-full py-16 bg-gray-50 px-8">
          <>
            <h1 className="text-2xl font-medium text-gray-900 mb-2">
              Find your next favourite movie
            </h1>
            <p className="text-gray-500 mb-8">
              Search from thousands of movies
            </p>
          </>
          <SearchBar />
        </div>

        {/* Trending Section */}
        <div className="px-0 py-10">
          <h2 className="text-sm font-medium text-gray-500 mb-4">
            Trending this week
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {movies
              .filter((movie: any) => movie.poster_path)
              .map((movie: any) => (
                <Link
                  href={`/movie/${movie.id}`}
                  key={movie.id}
                  className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      {movie.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {movie.release_date?.split("-")[0]}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
