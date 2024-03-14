import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.container} >
        <div className={styles.content} >
            <h1 className={styles.title} >Alberto</h1>
            <p className={styles.description} >
                I'm a web developer currently studying to become a full-stack developer with The Knowledge House Fellowship
                I'm passionate about the positve impact technology can bring to communites and expand opportunites accross individuals.
            </p>
            <a href='mainto:dayofthetech' className={styles.contactBtn} >Contact Me</a>
        </div>
        <img src={getImageUrl("hero/imageV2.png")}
            alt='Hero image'
            className={styles.heroImg}
            />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

/* alt - z to re-organize code */