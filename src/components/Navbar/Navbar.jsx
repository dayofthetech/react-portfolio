import React, {useState} from 'react'
import styles from "./Navbar.module.css";
/* className style are present in Navbar.module.css */
import { getImageUrl } from '../../utils';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // navbar change color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <nav className={color ?  `${styles.navbar} ${styles.navbarbg}` : `${styles.navbar}`}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>

            {/* getImageUrl fetches from the assets dir */}
            <img className={styles.menuBtn}
                src={menuOpen
                ? getImageUrl('nav/closeIcon.png')
                : getImageUrl('nav/menuIcon.png')
                }
                alt='menu-buton'
                onClick={() => setMenuOpen(!menuOpen)} />
            <ul
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                <li>
                {/* This refers to in About.js /#about and takes user to section */}
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

