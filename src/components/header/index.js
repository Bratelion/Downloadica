import {React, useState, useEffect} from 'react'
import styles from './style.module.css'

const Header = () =>  {
    return (
        <div className={styles.main}>
            <a className={styles.link} href="/">
                <img src={process.env.PUBLIC_URL + "/logo.png"} className={styles.logo} alt="Downloadica"/>
            </a>
        </div>
    )
}

export default Header