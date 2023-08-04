import React from 'react'
import styles from '../../styles/Footer.module.css'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" className={styles.logoImg}/>
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by <a href="https://egorgloom.github.io/my-resume/" target="_blank" rel="noreferrer">Egor Orlov</a>
      </div>
      <div className={styles.socials}>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
            </svg>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
            </svg>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
            </svg>
        </a>
      </div>

    </section>
  )
}
