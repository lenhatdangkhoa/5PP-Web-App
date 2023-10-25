"use client"
import React, {useState, useEffect} from "react"

export default function RegistrationLayout() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false);

    const is8Char = password.length >= 8
    const isUpper = /[A-Z]/.test(password)
    const isLower = /[a-z]/.test(password)
    const hasNum = /[0-9]/.test(password)
    const hasSpecial = /[!@#$%^&*]/.test(password)



    function handlePasswordChange(e) {
        const pass = e.target.value;
        setPassword(pass);
        setValidPassword(isPasswordValid(pass));
      }
    function isPasswordValid(value) {
        return (
          value.length >= 8 && 
           /[A-Z]/.test(value) &&
          /[a-z]/.test(value) &&
          /[0-9]/.test(value) &&
          /[!@#$%^&*]/.test(value)
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

    return <div className="flex space-x-4 justify-center bg-slate-200">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <div>
            <input type="text" className="border-2 border-indigo-600 rounded-md" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"></input>
            </div>
            <div>
            <input type="password" className="border-2 border-indigo-600 rounded-md" 
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"></input>
            </div>
            <div>
            <input type="submit" className="btn btn-secondary" value="Register"/>
            </div>
        </form>
        <div className="bg-slate-300 border border-slate-600 text-slate-800 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Password requirements:</strong>
            <ul className="list-disc pl-5 mt-2">
                <li className={is8Char ? "text-green-600" : ""}>Your password must be at least 8 characters long.</li>
                <li className={isUpper ? "text-green-600" : ""}>Include at least one uppercase letter.</li>
                <li className={isLower ? "text-green-600" : ""}>Include at least one lowercase letter.</li>
                <li className={hasNum ? "text-green-600" : ""}>Include at least one number.</li>
                <li className={hasSpecial ? "text-green-600" : ""}>Include at least one special character (e.g., @, #, $, %).</li>
            </ul>
        </div> 
        
        </div>
    
}