import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import BlogList from "./BlogList"
import BlogPost from "./BlogPost"
import data from "./data"
import booklol from "./booklol.jpg"

export default function App() {
const blogs = data.map(item => {
   return (
    <BlogPost 
            title={item.title}
            subTitle={item.subTitle}
            author={item.author}
            date={item.date}
            />
    )
})
    return (
        <div>
            <Navbar />
            <img src={booklol} className= "book--img" alt="bookimg"/>
            <Header />
            <BlogList />

            <section className= "blog--list-all">
                {blogs}
            </section>
        </div>
    )
}