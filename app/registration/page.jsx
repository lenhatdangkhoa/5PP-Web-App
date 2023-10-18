import React from "react"
import RegistrationLayout from "../components/Registrations/RegistrationLayout"


export default async function registrationPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users",
        { cache: "no-store" })
    const users = await res.json()

    return <div className="">
        <RegistrationLayout />
        <h1>Hello World</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
}