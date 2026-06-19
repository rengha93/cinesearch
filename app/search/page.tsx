import { searchMovies, IMAGE_BASE_URL } from "@/lib/tmdb";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ q: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const movies = await searchMovies(q);
  const filtered = movies.filter((movie: any) => movie.poster_path);
  return (
    <div className="min-h-screen bg-white">
      <main className="px-8 py-10">
        <h2 className="text-sm font-medium text-gray-500 mb-6">
          Results for "{q}" — {filtered.length} found
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {filtered.map((movie: any) => (
            <Link
              href={`/movie/${movie.id}`}
              key={movie.id}
              className="bg-white border border-gray-100 rounded-lg overflow-hidden"
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
      </main>
    </div>
  );
}
