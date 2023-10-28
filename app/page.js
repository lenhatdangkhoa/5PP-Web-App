import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, World</h1>
      <a href="/registration"><button>Sign Up</button></a>
    </main>
  )
}
