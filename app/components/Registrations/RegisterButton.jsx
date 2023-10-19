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
    return <div>
        <form action="/register" method="POST">
            <input type="text" className="border-2 border-indigo-600"></input>
            <button type="submit" className="btn btn-secondary">Register</button>
        </form>
        </div>
    
}