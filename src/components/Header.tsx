import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo'
import Navbar from './Navbar'

export const Header = () => {
    return (
        <header className={styles.container}>
            <Logo />
            <Navbar />
        </header>
    )
}
export default Header
