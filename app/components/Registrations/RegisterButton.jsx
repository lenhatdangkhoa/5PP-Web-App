"use client";
import React, {useEffect, useState} from "react"

export default function RegisterButton() {

    useEffect(() => {
        fetch("http://localhost:3001/test").then(
            response => response.json()
        ).then(
            data => console.log(data)
        )
    })
    return <button onClick={() => console.log("registering")}>Register</button>
}