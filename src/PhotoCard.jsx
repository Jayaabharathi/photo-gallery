export default function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <img
        
  src={`https://picsum.photos/id/${photo.id}/400/300`}
  alt={`Photo by ${photo.author}`}
  loading="lazy"
  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
/>
      
      <div className="flex items-center justify-between p-3">
        <span className="text-sm font-semibold text-slate-700 truncate">{photo.author}</span>
       <button
  onClick={() => onToggle(photo.id)}
  aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
  className="p-2 rounded-full hover:bg-red-50 transition"
>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-6 h-6 ${
              isFavourite ? "fill-red-500 stroke-red-500" : "fill-none stroke-gray-500"
            }`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
}