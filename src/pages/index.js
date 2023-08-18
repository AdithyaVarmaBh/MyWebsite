import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
      <Head>
        <title>Adithya Varma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>Welcome to Adithya&#x27;s website</h1>
        <div className={styles.center}>
        <div className={styles.description}>
          
          <p>
            This website is currently under construction...
            <br/><br/><br/><br/><br/>
            <Link href="/food">Meanwhile please have a look at my <u>Food Page</u></Link>
          </p>
          
          </div> 
          
          
          </div>
          
          
    

        <div className={styles.grid}>
         
        </div>
      </main>
    </>
  )
}

export default Home