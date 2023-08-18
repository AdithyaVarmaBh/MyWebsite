import Head from "next/head"
import styles from "@/styles/Home.module.css"
import navstyle from "@/styles/food/index.module.css"
function FoodHome(){
    return(
        <>
            <Head>
                <title>Varma Food</title>
            </Head>
            <main className={styles.main}>
                <div className={navstyle.topnav}>
                    <a href="/food">Home</a>
                    <a href="/food/menu">Menu</a>
                    <a href="/food/contact">Contact Us</a>
                </div>
                <h1 className={styles.title}>Welcome to My Foods Page</h1>
                <div className={styles.center}>
                <div className={styles.description}>
                  <p>You are on the right place where you are going to find delicious Indian home made food right in Canada...!!! 
                    <br/>excited about it.. stay tuned... we will be back soon with our menu and details
                  </p>
                </div>    
                </div>
            </main>
        </>
    )
}
export default FoodHome