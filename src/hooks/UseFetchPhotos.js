import {useState, useEffect} from "react";

const URL= "https://picsum.photos/v2/list?limit=30";

export default function useFetchPhotos(){
    const [photos, setPhotos]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);

    useEffect(()=>{
        let cancelled = false;

        async  function fetchPhotos(){
            try{
                const res= await fetch(URL);
                if( !res.ok) throw new Error("Failed to fetch photos")
                const data = await res.json();
                if(!cancelled) setPhotos(data);}
                catch(err){
                    if(!cancelled) setError (err.message||"Something went wrong")}
                    finally{
                        if(!cancelled) setLoading(false);

            }
        }
        fetchPhotos();

        return () => {
            cancelled = true;
        };
    },[]);
    return {photos, loading, error};


}