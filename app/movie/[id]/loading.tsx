export default function MovieLoading() {
  return (
    <div className="px-8 py-10 animate-pulse">
      <div className="flex gap-8">
        {/* poster skeleton */}
        <div className="w-48 h-72 bg-gray-200 rounded-lg flex-shrink-0" />

        <div className="flex-1">
          {/* title skeleton */}
          <div className="h-8 bg-gray-200 rounded w-64 mb-3" />
          {/* meta skeleton */}
          <div className="h-4 bg-gray-200 rounded w-48 mb-4" />
          {/* genre badges */}
          <div className="flex gap-2 mb-4">
            <div className="h-6 bg-gray-200 rounded-full w-16" />
            <div className="h-6 bg-gray-200 rounded-full w-16" />
            <div className="h-6 bg-gray-200 rounded-full w-16" />
          </div>
          {/* overview skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      </div>
    </div>
  );
}