import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text} >
            <h2>Contact</h2>
            <p>Reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img
                src={getImageUrl("contact/email.png")}
                    alt='Email icon'
                />
                <a href='mailto:myemail@email.com'>Email</a>
            </li>
            <li className={styles.link}>
                <img
                src={getImageUrl("contact/linkedin.png")}
                    alt='linkedin icon'
                />
                <a href='https://www.linkedin.com/in/albertoreyes2021/'>LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img
                src={getImageUrl("contact/github.png")}
                    alt='github icon'
                />
                <a href='https://github.com/dayofthetech'>GitHub</a>
            </li>
        </ul>
    </footer>
  )
}
