import React from "react";
import styles from './main.module.css'

const Main = () => {
    return (
        <main className={styles.main}>
            <div className="container">
                <div className={styles.headerDev}>
                    <div className={styles.headerInfo}>
                        <h2 style={{ fontSize: "20px", color: "#E87D0E", fontWeight: "700" }}>3D game Dev </h2>
                        <h1 className={styles.h1}>Work that we <br />produce for our <br /> clients</h1>
                        <p style={{ fontWeight: "500", fontSize: "16px" }}>Lorem Ipsum is simply dummy text of the printing and <br />
                            typesetting industry. Lorem Ipsum has been the industry's <br /> standard.</p>
                        <button className={styles.buttonDev}>Get more details</button>
                    </div>
                    <div className={styles.imgDev}>
                        <img src="./images/joy_stick 1.png" alt="" />
                        <img src="./images/cry 1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.headerSell}>
                    <div className={styles.sellInfo}>
                        <h1>Currently Trending Games</h1>
                        <div className={styles.sellButton}>
                            <button style={{ background: "#FA9021", color: "white" }}>See All</button>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <img src="./images/Rectangle 23.png" alt="" />
                        <img src="./images/Rectangle 24.png" alt="" />
                        <img src="./images/Rectangle 25.png" alt="" />
                        <img src="./images/Rectangle 26.png" alt="" />
                    </div>
                    <div className={styles.followImg}>
                        <img src="./images/Vector.png" alt="" />
                        <p>40 Followers</p>
                        <img src="./images/Vector.png" alt="" />
                        <p>40 Followers</p>
                        <img src="./images/Vector.png" alt="" />
                        <p>40 Followers</p>
                        <img src="./images/Vector.png" alt="" />
                        <p>40 Followers</p>
                    </div>
                </div>
            </div>
            <div className={styles.mainTop}>
                <div className="container">
                    <div className={styles.mainRight}>
                        <h1>Lorem Ipsum is simply dummy text of the<br />
                            printing and typesetting industry.</h1>
                    </div>
                    <div className={styles.mainInfo}>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                            industry. Lorem Ipsum has been the industry's standard dummy text <br />
                            ever since the 1500s,</p>
                    </div>
                    <div className={styles.mainImg}>
                        <img src="./images/Rectangle 4.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.mainIndustry}>
                    <div className={styles.industryInfo}>
                        <h1>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
                            industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className={styles.game}>
                        <img src="./images/Group.png" alt="" />
                        <img src="./images/pc 1.png" alt="" />
                        <img src="./images/ps4 1.png" alt="" />
                        <img src="./images/Group(1).png" alt="" />
                    </div>
                    <div className={styles.gameInfo}>
                        <h4>Mobile Game Development</h4>
                        <h4>PC Game Development</h4>
                        <h4>PS4 Game Development</h4>
                        <h4>AR/VR Solutions</h4>
                    </div>
                    <div className={styles.arrowImg}>
                        <img src="./images/arrow 1.png" alt="" />
                        <img src="./images/arrow 1.png" alt="" />
                        <img src="./images/arrow 1.png" alt="" />
                        <img src="./images/arrow 1.png" alt="" />
                    </div>
                    <div className={styles.game2}>
                        <img src="./images/Page 1.png" alt="" />
                        <img src="./images/3d-cube 1.png" alt="" />
                    </div>
                    <div className={styles.gameInfo2}>
                        <h4>AR/ VR design</h4>
                        <h4>3D Modelings</h4>
                    </div>
                    <div className={styles.arrowImg2}>
                        <img src="./images/arrow 1.png" alt="" />
                        <img src="./images/arrow 1.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.project}>
                    <div className={styles.projectInfo}>
                        <h1>Our Recent Projects</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                            industry. </p>
                    </div>
                    <div className={styles.projectImg}>
                        <img src="./images/Rectangle 15.png" alt="" />
                        <img src="./images/Rectangle 17.png" alt="" />
                        <img src="./images/Rectangle 18.png" alt="" />
                    </div>
                    <div className={styles.projectImg2}>
                        <img src="./images/Rectangle 18.png" alt="" />
                        <img src="./images/Rectangle 19.png" alt="" />
                        <img src="./images/Rectangle 20.png" alt="" />
                    </div>
                    <div className={styles.projectButton}>
                        <button style={{ background: "#FA9021", color: "white" }}>See All</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;