import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="flex flex-col justify-center">
        <Link href="/registration" className>Sign Up</Link>
        <Link href="/signin"><button className="btn" >Sign In</button></Link>
      </div>
    </main>
  )
}
