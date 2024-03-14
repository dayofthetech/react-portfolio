import React from 'react'
import { getImageUrl } from '../utils'
import styles from './About.module.css'

export default function About() {
  return (
    /* by adding the id='about' when click it takes user to about section
    by /#about */
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img
            src={getImageUrl('about/iconAbout.png')}
            alt='Technology design'
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img
                    src={getImageUrl('about/frontend.png')}
                    alt='cursor icon'
                />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>Experience working with React in API projects using Axios, component structure and custom hooks.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img
                    src={getImageUrl('about/backend.png')}
                    alt='small computer icon'
                />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>Experience with MongoDB, Airtable as well entry level of Python</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img
                    src={getImageUrl('about/network.png')}
                    alt='mock landing page'
                />
                <div className={styles.aboutItemText}>
                    <h3>Cyber Security Analyst</h3>
                    <p>Experience with Google Workspace to set up 2FA and password management.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}
