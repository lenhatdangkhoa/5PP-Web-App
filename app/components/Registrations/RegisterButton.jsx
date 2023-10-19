"use client";
import React, {useEffect, useState} from "react"

export default function RegisterButton() {

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:3001/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "message" : "hello?" }),
        });

        if (response.ok) {
            console.log("Received response from server");
        } else {
            console.error("Error while sending POST request");
        }
    }
    useEffect(() => {
        fetch("http://localhost:3001/test").then(
            response => response.json()
        ).then(
            data => console.log(data)
        )
    })
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" className="border-2 border-indigo-600"></input>
            <input type="submit" className="btn btn-secondary"/>
        </form>
        </div>
    
}