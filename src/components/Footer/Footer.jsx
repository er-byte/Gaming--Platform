import React from "react";
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInfo}>
                    <div className={styles.footerInfo1}>
                    <h3>LOGO</h3>
                    <p>Lorem Ipsum is simply dummy text of the <br />
                     printing and typesetting industry. </p>
                     <h4>@Logo</h4>
                    </div>
                     <div className={styles.footerInfo2}>
                    <h4 style={{color:"white",fontSize:"17px"}}>About us</h4>
                    <h4 style={{color:"white",paddingTop:"15px"}}>Zeux</h4>
                    <h4 style={{color:"white"}}>Careers</h4>
                    <h4 style={{color:"white"}}>Contact us</h4>
                     </div>
                     <div className={styles.footerInfo3}>
                    <h4 style={{color:"white"}}>Contact us</h4>
                    <p style={{color:"white",paddingTop:"10px"}}>Lorem Ipsum is simply dummy text <br />
                     of the printing and typesetting <br />
                      industry. </p>
                      <a style={{color:"white"}} href="tel:+916 4444 5555 ">+916 4444 5555</a>
                     </div>
                     <div className={styles.footerImg}>
                        <img src="./images/Vector(2).png" alt="" />
                        <img src="./images/twitter 1.png" alt="" />
                        <img src="./images/linkedin 1.png" alt="" />
                        <img src="./images/instagram 1(2).png" alt="" />
                     </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;