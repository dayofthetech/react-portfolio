import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./ProjectCard.module.css";


export default function ProjectCard({ project: {title, description, imgSrc, skills, demo, source} }) {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(imgSrc)}
        alt={`Image of ${title}`}
        className={styles.img}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
        {skills.map((skill, id) => {
            return (
                <li key={id}
                className={styles.skill}>{skill}
                </li>)
            })}
        </ul>
        <div className={styles.links}>
            <a href={'https://github.com/dayofthetech/react-portfolio'} className={styles.link} >Source - Currently private</a>
            <a href={''} className={styles.link} >Demo</a>
        </div>
    </div>
  )
}
