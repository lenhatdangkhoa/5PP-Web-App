"use client"
import React from "react"
import styles from "./LoginButton.module.css"


export default function LoginButton() {
    return <button className={styles.login} onClick={() => console.log("Logging In")}>Log In</button>
}