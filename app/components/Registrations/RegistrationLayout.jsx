"use client"
import React, {useState, useEffect} from "react"

export default function RegistrationLayout() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(true);

    function handlePasswordChange(e) {
        const pass = e.target.value;
        setPassword(pass);
        setValidPassword(isPasswordValid(pass));
      }
    const isPasswordValid = (value) => {
        // Implement your password validation logic here
        return (
          value.length >= 8
        //   /[A-Z]/.test(value) &&
        //   /[a-z]/.test(value) &&
        //   /[0-9]/.test(value) &&
        //   /[!@#$%^&*]/.test(value)
        );
      };
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
                onChange={handlePasswordChange}
                placeholder="Username"></input>
            </div>
            <div>
            <input type="password" className="border-2 border-indigo-600" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"></input>
            </div>
            <div>
            <input type="submit" className="btn btn-secondary" value="Register"/>
            </div>
        </form>
        {validPassword && (<div className="bg-red-100 border border-red-500 text-red-900 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Password requirements:</strong>
            <ul className="list-disc pl-5 mt-2">
                <li>Your password must be at least 8 characters long.</li>
                <li>Include at least one uppercase letter.</li>
                <li>Include at least one lowercase letter.</li>
                <li>Include at least one number.</li>
                <li>Include at least one special character (e.g., @, #, $, %).</li>
            </ul>
        </div>)}
        
        </div>
    
}