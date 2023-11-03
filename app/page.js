import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="bg-sky-500/50 flex justify-center flex-col">
      <Link href="/registration"><button className="btn " >Sign Up</button></Link>
      <Link href="/signin"><button className="btn " >Sign In</button></Link>
      </div>
    </main>
  )
}
