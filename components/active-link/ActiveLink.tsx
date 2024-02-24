'use client';

import Link from 'next/link';
import styles from './ActiveLink.module.scss'
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({path, text}: Props) => {
  const pathName = usePathname();
  //console.log(pathName)
  return (
    <Link className={`${(pathName === path) && styles.activeLink}`} href={path}>{text}</Link>
  )
}
