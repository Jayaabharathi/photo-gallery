Photo Gallery

A small React app that loads photos from the Picsum API, shows them in a grid, lets you search by author name, and lets you mark favourites. I made it for the Celebrare frontend intern pre-screening.

What it does
Loads 30 photos from https://picsum.photos/v2/list?limit=30 when the page opens
Shows a spinner while loading and an error message if the request fails
Shows the photos in a grid: 4 columns on desktop, 2 on tablet, 1 on mobile
Each card has the photo, the author name and a heart button
Typing in the search box filters the photos by author name straight away (no new API call)
Clicking the heart adds or removes a favourite, and favourites are still there after a refresh
Built with
React (functional components and hooks only)
Vite
Tailwind CSS

No other UI libraries.

How to run it

You need Node.js installed.

bash
npm install
npm run dev

Then open the link that Vite prints in the terminal (usually http://localhost:5173).

Project structure
src/
  hooks/
    useFetchPhotos.js     custom hook: fetches photos, returns photos, loading, error
  favouritesReducer.js    reducer for favourites + reading saved favourites
  Gallery.jsx             main component: search, grid, favourites
  PhotoCard.jsx           one photo card with the heart button
  App.jsx
  main.jsx
  index.css               Tailwind import
How the main parts work

useFetchPhotos is a custom hook that does the fetching. It returns photos, loading and error, so the Gallery component never calls fetch itself.

Favourites are managed with useReducer. The reducer handles one action, TOGGLE_FAVOURITE, which adds the photo id if it is not in the list and removes it if it is. A useEffect saves the list to localStorage whenever it changes, and the reducer starts from the saved list when the app loads.

useMemo is used for the filtered photo list, so the filtering only runs when the photos or the search text change.

useCallback is used on the search handler (and the favourite toggle handler) so the same function is kept between renders.

Scope

I kept to the seven requirements in the assignment and did not add extra features.
