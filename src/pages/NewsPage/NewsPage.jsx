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
            <div className={styles.newsVideo}>
                <div className={styles.videoInfo}>
                    <h2>Lorem Ipsum is simply dummy text <br />
                        of the printing. </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and <br />
                        typesetting industry.Lorem Ipsum is simply dummy .</p>
                </div>
                <div className={styles.videoImg1}>
                    <img src="./images/Video Image.png" alt="" />
                </div>
                <div className={styles.imgVideo}>
                    <div className={styles.videoImg2}>
                        <img style={{ paddingTop: "20px" }} src="./images/Vector(4).png" alt="" />
                        <h4 style={{ color: "white", fontSize: "15px", fontWeight: "400" }}>Lorem Ipsum is simply</h4>
                        <img style={{ paddingTop: "20px" }} src="./images/Vector(4).png" alt="" />
                        <h4 style={{ color: "white", fontSize: "15px", fontWeight: "400" }}>Lorem Ipsum is simply</h4>
                    </div>
                    <div className={styles.videoImg3}>
                        <img style={{ paddingTop: "20px" }} src="./images/Vector(4).png" alt="" />
                        <h4 style={{ color: "white", fontSize: "15px", fontWeight: "400" }}>Lorem Ipsum is simply</h4>
                        <img style={{ paddingTop: "20px" }} src="./images/Vector(4).png" alt="" />
                        <h4 style={{ color: "white", fontSize: "15px", fontWeight: "400" }}>Lorem Ipsum is simply</h4>
                    </div>
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
            <div className={styles.poiskRight}>
                <div className={styles.rightImg3}>
                    <img src="./images/Rectangle 276.png" alt="" />
                    <img src="./images/Rectangle 276(1).png" alt="" />
                    <img src="./images/Rectangle 276(2).png" alt="" />
                </div>
                <div className={styles.poiskButton}>
                    <button style={{ background: "#FF8484" }}>John smash</button>
                    <button style={{ background: "#2351F5" }}>John smash</button>
                    <button style={{ background: "#FF7C32" }}>John smash</button>
                </div>
                <div className={styles.poiskInfo}>
                    <h3>Lorem Ipsum is simply <br />
                        dummy text dummy text ? </h3>
                    <h3>Lorem Ipsum is simply <br />
                        dummy text dummy text ? </h3>
                    <h3>Lorem Ipsum is simply <br />
                        dummy text dummy text ? </h3>
                </div>
                <div className={styles.rightImg4}>
                    <img src="./images/Rectangle 276(4).png" alt="" />
                    <img src="./images/Rectangle 276(5).png" alt="" />
                    <img src="./images/Rectangle 276(6).png" alt="" />
                </div>
                <div className={styles.poiskButton2}>
                    <button style={{ background: "#9921C3" }}>John smash</button>
                    <button style={{ background: "#23A54F" }}>John smash</button>
                    <button style={{ background: "#2351F5" }}>John smash</button>
                </div>
                <div className={styles.poiskInfo}>
                    <h3>Lorem Ipsum is simply <br />
                        dummy text dummy text ? </h3>
                    <h3>Lorem Ipsum is simply <br />
                        dummy text dummy text ? </h3>
                    <h3>Lorem Ipsum is simply <br />
                        dummy text dummy text ? </h3>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;