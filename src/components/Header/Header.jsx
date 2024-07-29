import React from "react";
import styles from './header.module.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.headerTop}>
                        <div className={styles.headerRight}>
                            <h2>LOGO</h2>
                            <nav className={styles.nav}>
                                <ul className={styles.ul}>
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                    <li>
                                        <Link to='/news'>News</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact us'>Contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </header>

        </>
    );
};

export default Header;