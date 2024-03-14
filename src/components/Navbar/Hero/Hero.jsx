import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.container} >
        <div className={styles.content} >
            <h1 className={styles.title} >Alberto</h1>
            <p className={styles.description} >
                I'm studying full stack web development with The Knowledge House
            </p>
            <a href='mainto:dayofthetech' className={styles.contactBtn} >Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")}
            alt='Hero image'
            className={styles.heroImg}
            />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
