import React from 'react'
import styles from './Footer.module.css'

const footerHeight = 200;

function Footer() {
    return (
        <>
            <div style={{ height: footerHeight }} />
            <footer style={{ height: footerHeight }} className={styles.footer}>
                Copyright &copy; {new Date().getFullYear()} Emppu
            </footer>
        </>
    )
}

export default Footer