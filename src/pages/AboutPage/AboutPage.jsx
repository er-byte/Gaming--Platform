import React from 'react'
import styles from './aboutpage.module.css'

const AboutPage = () => {
    return (
        <div className='container'>
            <div className={styles.aboutSimplay}>
                <div className={styles.simplayInfo}>
                    <h2>Lorem Ipsum is simply <br /> dummy text of the printing <br /> and.</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and <br />
                        typesetting industry. Lorem Ipsum has been the <br />
                        industry's standard dummy text ever since the 1500s.</p>
                    <button>Get in touch</button>
                </div>
                <div className={styles.simplayImg}>
                    <img src="./images/Rectangle 6.png" alt="" />
                </div>
            </div>
            <div className={styles.aboutWork}>
                <div className={styles.workInfo}>
                    <h2>Why work with us</h2>
                </div>
                <div className={styles.workRight}>
                    <div className={styles.workRighth3}>
                        <h3 style={{ border: "8px solid #B000DC" }}>Lorem ipsum</h3>
                        <h3 style={{ border: "8px solid #DC4200" }}>Lorem ipsum</h3>
                        <h3 style={{ border: "8px solid #00DC8D" }}>Lorem ipsum</h3>
                    </div>
                    <div className={styles.workRighth2}>
                        <h2>Lorem Ipsum</h2>
                        <h2>Lorem Ipsum</h2>
                        <h2>Lorem Ipsum</h2>
                    </div>
                    <div className={styles.workRightp}>
                        <p>Lorem Ipsum is simply dummy text of the <br />
                            printing and typesetting industry. Lorem <br />
                            Ipsum has been the industry's standard <br />
                            dummy text ever since the 1500s,</p>
                        <p>Lorem Ipsum is simply dummy text of the <br />
                            printing and typesetting industry. Lorem <br />
                            Ipsum has been the industry's standard <br />
                            dummy text ever since the 1500s,</p>
                        <p>Lorem Ipsum is simply dummy text of the <br />
                            printing and typesetting industry. Lorem <br />
                            Ipsum has been the industry's standard <br />
                            dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
            <div className={styles.aboutPrinting}>
                <div className={styles.printingImg}>
                    <img src="./images/Rectangle 25(1).png" alt="" />
                </div>
                <div className={styles.printingInfo}>
                    <h4>Lorem ipsum</h4>
                    <h2>Lorem Ipsum is simply dummy text <br />
                        of the printing and typesetting <br />
                        industry. </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                        industry. Lorem Ipsum has been the industry's standard dummy <br />
                        text ever since the 1500s, when an unknown printer took a galley of <br />
                        type and scrambled it to make a type specimen book. It has <br />
                        survived not only five centuries,</p>
                </div>
            </div>
            <div className={styles.aboutTeam}>
                <div className={styles.teamInfo}>
                    <h2>Our Team</h2>
                </div>
                <div className={styles.teamImg}>
                    <img src="./images/Bill 1.png" alt="" />
                    <img src="./images/Beverly 1.png" alt="" />
                    <img src="./images/Claudia 1.png" alt="" />
                    <img src="./images/Avatar 1.png" alt="" />
                </div>
                <div className={styles.teamName}>
                    <h3>Bill peter</h3>
                    <h3>Beverly peter</h3>
                    <h3>Claudia peter</h3>
                    <h3>Avatar</h3>
                </div>
                <div className={styles.teamCOO}>
                    <h3>COO</h3>
                    <h3>COO</h3>
                    <h3>COO</h3>
                    <h3>COO</h3>
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

    );
};

export default AboutPage;