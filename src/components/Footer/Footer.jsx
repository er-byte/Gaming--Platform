import React from "react";
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInfo}>
                    <h3>LOGO</h3>
                    <p>Lorem Ipsum is simply dummy text of the <br />
                     printing and typesetting industry. </p>
                     <h4>@Logo</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;