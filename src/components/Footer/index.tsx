import Link from 'next/link'
import styles from './styles.module.css'


export default function Footer() {

    return(
        <footer className={styles.footer}>
            <div>
                <h2>Öz Şahin Evden Eve Nakliyat</h2>
                <p>ÖZ ŞAHİN NAKLİYAT kurulduğu günden bu güne kadar Türkiye’nin tüm bölgelerine Sigortalı, Asansörlü Evden Eve Nakliyat, Ofis Büro Taşımacılığı, Eşya Taşıma, Paketleme, Ambalajlama ve Depolama gibi faaliyetleri yürütmektedir.</p>
            </div>
            <div>
                <h2>Hizmetlerimiz</h2>
                <ul>
                    <li>Ev Ofis Taşımacılığı</li>
                    <li>Parça Eşya Taşıma</li>
                    <li>Eşya Depolama</li>
                    <li>Asansör Kiralama</li>
                </ul>
            </div>
            <div className={styles.contact}>
                <div>
                    <h3>Bize Ulaşın</h3>
                    <a href='/' title='Facebook'>
                        <img src="/facebook.svg" alt="Facebook" />
                    </a>
                    <a href='/' title='Instagram'>
                        <img src="/instagram.svg" alt="ınstagram" />
                    </a>
                    <a href='/' title='X'>
                        <img src="/twitter.svg" alt="X" />
                    </a>
                </div>
                <div>
                    <a className={styles.location} href='/'>Çorum Özşahin Nakliyat</a>
                    <a className={styles.phone} href='/'>0532 677 19 28</a>
                    <a className={styles.email} href='/'>info@ozsahinnakliyat.com</a>
                </div>
            </div>
            <div>
                <div>© 2023 Özşahin Nakliyat Tüm hakları saklıdır.</div>
                <div>
                    <Link href={'/'}>Kullanım şartları</Link>
                    <span>-</span>
                    <Link href={'/'}>Gizlilik Politikası</Link>
                </div>
            </div>
        </footer>
    )
}