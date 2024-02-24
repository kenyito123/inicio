
import Link from 'next/link'
import styles from './nav.module.scss'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'


const navItems = [
  {
    path: '/about',
    text: 'About'
  },
  {
    path: '/pricing',
    text: 'Pricing'
  },
  {
    path: '/contact',
    text: 'Contact'
  },
]



export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p>Inicio</p>
        <HomeIcon/>
      </Link>
      {navItems.map(navItem => (
        <ActiveLink key={navItem.path} {...navItem}/>
      ))}      
    </nav>
  )
}

