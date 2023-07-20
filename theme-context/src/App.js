import React, { useState } from "react"
import Navbar from "./Navbar"
import Button from "./Button"
import Footer from "./Footer"
import Main from "./Main"
import { ThemeContextProvider } from "./ThemeProvider"

export default function App(props) {

    return (
        <>
            <ThemeContextProvider>
                <Navbar />
                <Main />
                <Button />
                <Footer />
            </ThemeContextProvider>
        </>
    )
}