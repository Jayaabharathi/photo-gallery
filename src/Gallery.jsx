import { useReducer, useEffect, useState, useCallback, useMemo } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos.js";
import {
  favouritesReducer,
  loadFavourites,
  STORAGE_KEY,
} from "./favouritesReducer.js";
import PhotoCard from "./PhotoCard.jsx";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    loadFavourites
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE_FAVOURITE", id });
  }, []);

  const filteredPhotos = useMemo(() => {
    const term = search.trim().toLowerCase();
    return photos.filter((p) => p.author.toLowerCase().includes(term));
  }, [photos, search]);

  if (loading) {
    return (
     <div className="flex justify-center items-center h-screen">
  <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin" />
</div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
  <p className="bg-red-50 text-red-700 border border-red-200 rounded-lg px-6 py-4 text-center">
    Error: {error}
  </p>
</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <input
  type="text"
  value={search}
  onChange={handleSearch}
  placeholder="Search by author name..."
  className="w-full max-w-md mx-auto block mb-8 px-5 py-3 rounded-full border border-slate-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourite={favourites.includes(photo.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}