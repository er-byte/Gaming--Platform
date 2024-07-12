import React from 'react'
import styles from './contact.module.css'

const ContactPage = () => {
    return(
        <div className='container'>
           <div className={styles.contact}>
            <div className={styles.contactInfo}>
                <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className={styles.contactImg}>
                <img src="./images/Vector(1).png" alt="" />
            </div>
            <div className={styles.contactRight}>
                <div className={styles.rightInfo}>
                    <h4>Follow us</h4>
                </div>
                <div className={styles.rightImg}>
                    <img src="./images/Vector(2).png" alt="" />
                    <img src="./images/twitter 1.png" alt="" />
                    <img src="./images/linkedin 1.png" alt="" />
                    <img src="./images/Group(2).png" alt="" />
                    <a style={{color:"white", fontSize:"20px", fontWeight:"300", paddingLeft:"20px"}} href="tel:+916 4444 5555 ">+916 4444 5555</a>
                    <img src="./images/Vector(3).png" alt="" />
                </div>
            </div>
           </div>
           <div className={styles.contactRegister}>
            <div className={styles.registerInfo}>
                <h3>Say hello</h3>
                <p>Lorem Ipsum is simply dummy text of the printing .</p>
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

export default ContactPage;