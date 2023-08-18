import styles from "@/styles/Home.module.css"
import navstyle from "@/styles/food/index.module.css"
import Link from "next/link"


function Contact(){
    return(
        <main className={styles.main}>
        <div  className={navstyle.topnav}>
        <Link href="/food">Home</Link>
        <Link href="/food/menu">Menu</Link>
        <Link href="/food/contact">Contact Us</Link>
    </div>
        <h1>Please contact us on <a href="tel:+16476749376">+16476749376</a></h1>
       
        </main>
    )
}

export default Contact