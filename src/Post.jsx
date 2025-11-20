import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import React from "react";

function Post() {
  const { data, isLoading, isError,isFetching } = useQuery({
    queryKey: ["images"],
    queryFn: async() =>{console.log("fetching images");
    
     const res=await fetch("https://picsum.photos/v2/list?page=2&limit=10");
     if(!res.ok) throw new Error("Network response are not ok");
        return res.json();
    },
    staleTime:10000,
  });

  if (isLoading) return <p>Loading Images...</p>;
  if (isError) return <p>Error loading images</p>;

  return (
    
    <div>
      <h1>Posts List</h1>
      {isFetching && <p>Refreshing in background</p>}

      {data?.map((img) => (
        <div key={img.id}>
          <img
            src={img.download_url}
            alt={img.author}
            width="200"
            height="150"
          />
          <p>{img.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Post;