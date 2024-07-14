import React from 'react'
import styles from './newspage.module.css'
import { Search } from '@material-ui/icons'

const NewsPage = () => {
    return (
        <div className='container'>
            <div className={styles.newsDummy}>
                <div className={styles.dummyInfo}>
                    <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className={styles.dummyPoisk}>
                <Search /> 
                <input placeholder='Search...' />
                </div>
            </div>
            <div className={styles.newsRight}>
                <div className={styles.rightImg}>
                    <img src="./images/Rectangle 274.png" alt="" />
                </div>
                <button>John smash</button>
                <div className={styles.rightInfo}>
                    <h2>Lorem Ipsum is simply dummy text <br /> dummy text </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and <br />
                        typesetting industry. Lorem Ipsum has been the industry's <br />
                        standard dummy text ever since the 1500s, when an unknown <br />
                        printer took a galley of type and scrambled it to make a type <br />
                        specimen book. It has survived not only five centuries,</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and <br />
                        typesetting industry. </p>
                </div>
                <div className={styles.newsRight2}>
                    <div className={styles.rightImg2}>
                        <img src="./images/Rectangle 274(1).png" alt="" />
                    </div>
                    <button>John smash</button>
                    <div className={styles.rightInfo2}>
                        <h2>Lorem Ipsum is simply dummy text <br /> dummy text</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and <br />
                            typesetting industry. Lorem Ipsum has been the industry's <br />
                            standard dummy text ever since the 1500s, when an unknown <br />
                            printer took a galley of type and scrambled it to make a type <br />
                            specimen book. It has survived not only five centuries,</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and <br />
                            typesetting industry. </p>
                    </div>
                </div>
                <div className={styles.rightImg3}>
                    <img src="./images/Rectangle 276.png" alt="" />
                    <img src="./images/Rectangle 276(1).png" alt="" />
                    <img src="./images/Rectangle 276(2).png" alt="" />
                    <img src="./images/Rectangle 276(3).png" alt="" />
                    <img src="./images/Rectangle 276(4).png" alt="" />
                    <img src="./images/Rectangle 276(5).png" alt="" />
                    <img src="./images/Rectangle 276(6).png" alt="" />
                </div>
            </div>
            <div className={styles.addres}>
                <div className={styles.addresInfo}>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                        industry. </p>
                </div>
                <div className={styles.addresRight}>
                    <h1>Stay in the loop</h1>
                    <p>Subscribe to receive the latest news and updates about TDA. <br />
                        We promise not to spam you! </p>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;