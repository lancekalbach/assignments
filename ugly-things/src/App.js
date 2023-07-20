import React, {useState} from "react"
import Input from "./Input.js"
import List from "./List.js"
import Nav from "./Nav.js"
import {InputContextProvider} from "./InputContext"

export default function App(props) {
    return (
        <>
            <InputContextProvider>
                <Nav/>
                <Input/>
                <List/>
            </InputContextProvider>
        </>
    )
}