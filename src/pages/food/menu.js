import styles from "@/styles/Home.module.css"
import navstyle from "@/styles/food/index.module.css"

function Menu(){
    return(
        <main className={styles.main}>
        <div className={navstyle.topnav}>
                    <a href="/food">Home</a>
                    <a href="/food/menu">Menu</a>
                    <a href="/food/contact">Contact Us</a>
        </div>
        <div className={styles.center}>
        <div className={styles.description}>
            <p>
                <u>
                    <a href="https://www.facebook.com/marketplace/item/1373621593577506/">Curries, Snacks and Sweets</a>
                </u>
                <br/>
                <u>
                    <a href="https://www.facebook.com/marketplace/item/1356202201974945/">Paani Poori - Hyderabadi Style</a>
                </u>
            </p>
        </div>
        </div>
        <h1>Menu coming soon</h1>
        </main>
        
    )
}

export default Menu