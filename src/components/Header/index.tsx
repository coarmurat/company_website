'use client'

import styles from './index.module.css'
import typo from '@/styles/typo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useRef, useEffect } from 'react'

export default function Header() {
    const navInput = useRef<HTMLInputElement|null>(null)
    const router = useRouter()
    const pathname = usePathname()
    
    useEffect(() => {
        
        if(navInput.current){

            navInput.current.checked = false
        }

    },[pathname])

    return(
        <header className={styles.header}>
            <div className={styles.left} onClick={() => pathname !== '/'?router.push('/'):false}>
                <img src="/logo.svg" alt="Özşahin Nakliyat" width={133} height={33}/>
            </div>
            <div className={styles.right}>
                <input type="checkbox" id="toggleMenu" hidden ref={navInput}/>
                <label htmlFor="toggleMenu">
                    <button aria-label='Open global navigation menu'>
                        <div className={styles.topBar}></div>
                        <div className={styles.middleBar}></div>
                        <div className={styles.bottomBar}></div>
                    </button>
                </label>
                <nav>
                    <ul>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/'>Anasayfa</Link></li>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/hakkimizda'>Hakkımızda</Link></li>
                        <li className={`${styles.mainItem} ${styles.nestedItem}`}>
                            <button className={typo.medium18}>Hizmetlerimiz</button>
                            <ul>
                                <li className={styles.subItem}><Link className={`${typo.regular18}`} href='/evofistasimaciligi'>Ev ofis taşımacılığı</Link></li>
                                <li className={styles.subItem}><Link className={`${typo.regular18}`} href='/parcaesyatasima'>Parça eşya taşıma</Link></li>
                                <li className={styles.subItem}><Link className={`${typo.regular18}`} href='/ankaraicidepolama'>Ankara içi depolama</Link></li>
                                <li className={styles.subItem}><Link className={`${typo.regular18}`} href='/asansorkiralama'>Asansör kiralama</Link></li>
                            </ul>
                        </li>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/galeri'>Galeri</Link></li>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/araclarimiz'>Araçlarımız</Link></li>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/iletisim'>İletişim</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}