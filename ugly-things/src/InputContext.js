import React, { useState, useContext } from "react"

const InputContext = React.createContext()

function InputContextProvider(props) {

    const [post, setPost] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        submitPost(event);
      };
      
    const [createdPost, setCreatedPost] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
        setPost((prevPost) => ({
          ...prevPost,
          [name]: value,
        }));
    }
    
    const [isLoading, setIsLoading] = useState(false);

    const submitPost = (event) => {
        event.preventDefault()
        const newPost = {
            title: post.title,
            imgUrl: post.imgUrl,
            description: post.description
        }

        // setCreatedPost((prevPost) => [...prevPost, newPost])
        
        // setPost({
        //     title: "",
        //     image: "",
        //     desc: ""
        // })

        setIsLoading(true);
        fetch("https://api.vschool.io/lancekalbach/thing", {
         method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
        })
            .then((response) => response.json())
            .then((data) => {
        setCreatedPost((prevPost) => [...prevPost, data]);
        setIsLoading(false);
        setPost({
            title: "",
            imgUrl: "",
            description: "",
        });
     })
        .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        });
    }

    return (
        <InputContext.Provider value={{
            post: post, 
            submitPost: submitPost,
            handleChange: handleChange,
            setCreatedPost: setCreatedPost,
            handleSubmit: handleSubmit,
            createdPost: createdPost,
            isLoading: isLoading

        }}>
           {props.children}
        </InputContext.Provider>
    )

}

export {InputContext, InputContextProvider}

