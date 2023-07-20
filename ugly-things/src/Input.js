import React, {useContext} from "react"
import {InputContext} from "./InputContext"

export default function Input() {
   
const {post, submitPost, handleChange, handleSubmit} = useContext(InputContext)

    return (
        <div className="header--form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    value = {post.title}
                    onChange = {handleChange}
                />

                <input 
                    type="text"
                    placeholder="Image Url"
                    name="imgUrl"
                    value = {post.imgUrl}
                    onChange = {handleChange}
                />

                <input 
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={post.description}
                    onChange = {handleChange}
                />
                <button onClick={submitPost}>Submit</button>
            </form>
        </div>
    )
}