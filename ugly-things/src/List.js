import React, { useState, useEffect, useContext } from "react";
import { InputContext } from "./InputContext";



export default function List() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const { createdPost } = useContext(InputContext);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://api.vschool.io/lancekalbach/thing")
          .then((response) => response.json())
          .then((data) => {
            setPosts(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error:", error);
            setIsLoading(false);
          });
      }, []);
      

  return (
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {posts.map((post, index) => (
                <div key={index}>
                  <h3>{post.title}</h3>
                  <img src={post.imgUrl} alt={post.title} />
                  <p>{post.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      );
}
