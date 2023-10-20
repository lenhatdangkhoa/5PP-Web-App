"use client"
import React, {useState, useEffect} from "react"

export default function RegistrationLayout() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event) {
        event.preventDefault(); // prevent default page refreshing

        /*
        * Sending a post request to the server to with the username and password
        */
        const response = await fetch("http://localhost:3001/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "username" : username , "password" : password}),
        });

        if (response.ok) {
            console.log("Received response from server");
        } else {
            console.error("Error while sending POST request");
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" className="border-2 border-indigo-600" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"></input>
            </div>
            <div>
            <input type="text" className="border-2 border-indigo-600" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"></input>
            </div>
            <div>
            <input type="submit" className="btn btn-secondary"/>
            </div>
        </form>
        </div>
    
}