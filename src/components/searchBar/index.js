import React from 'react'
import styles from './style.module.css'

const SearchBar = (props) =>  {
    return (
        <div className={styles.main}>
            <input className={styles.searchBar} placeholder={"Paste YouTube link"} required
            />
        </div>
    )
}

export default SearchBar