import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Adithya Varma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>Welcome to Adithya&aposs website</h1>
        <div className={styles.center}>
        <div className={styles.description}>
          
          <p>
            This website is currently under construction...
          </p>
          </div> 
          </div>

    

        <div className={styles.grid}>
         
        </div>
      </main>
    </>
  )
}
