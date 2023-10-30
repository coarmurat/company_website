'use client'

import styles from './index.module.css'
import typo from '@/styles/typo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function Header() {
    const router = useRouter()
    const pathname = usePathname()

    return(
        <header className={styles.header}>
            <div className={styles.left} onClick={() => pathname !== '/'?router.push('/'):false}>
            <img src="/logo.svg" alt="Özşahin Nakliyat" width={133} height={33}/>
            </div>
            <div className={styles.right}>
                <input type="checkbox" id="toggleMenu" hidden />
                <label htmlFor="toggleMenu">
                    <button aria-label='Open global navigation menu'>
                        <div className={styles.topBar}></div>
                        <div className={styles.middleBar}></div>
                        <div className={styles.bottomBar}></div>
                    </button>
                </label>
                <nav>
                    <ul>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/'>ANASAYFA</Link></li>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/hakkimizda'>HAKKIMIZDA</Link></li>
                        <li className={`${styles.mainItem} ${styles.nestedItem}`}>
                            <button className={typo.medium18}>HİZMETLERİMİZ</button>
                            <ul>
                                <li className={styles.subItem}><Link className={`${typo.regular18}`} href='/evofistasimaciligi'>Ev ofis taşımacılığı</Link></li>
                                <li className={styles.subItem}><Link className={`${typo.regular18}`} href='/parcaesyatasima'>Parça eşya taşıma</Link></li>
                                <li className={styles.subItem}><Link className={`${typo.regular18}`} href='/ankaraicidepolama'>Ankara içi depolama</Link></li>
                                <li className={styles.subItem}><Link className={`${typo.regular18}`} href='/asansorkiralama'>Asansör kiralama</Link></li>
                            </ul>
                        </li>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/galeri'>GALERİ</Link></li>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/araclarimiz'>ARAÇLARIMIZ</Link></li>
                        <li className={styles.mainItem}><Link className={`${typo.medium18}`} href='/iletisim'>İLETİŞİM</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}