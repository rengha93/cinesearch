import { getMovieDetails, IMAGE_BASE_URL } from "@/lib/tmdb";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MoviePage({ params }: Props) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  if (!movie) return <div className="px-8 py-10">Movie not found.</div>;

  return (
    <div className="px-8 py-10">
      <div className="flex gap-8">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-48 rounded-lg object-cover"
        />
        <div>
          <h1 className="text-2xl font-medium text-gray-900 mb-2">
            {movie.title}
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            {movie.release_date?.split("-")[0]} · {movie.runtime} min · ⭐{" "}
            {movie.vote_average?.toFixed(1)}
          </p>
          <div className="flex gap-2 mb-4">
            {movie.genres?.map((genre: any) => (
              <span
                key={genre.id}
                className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
