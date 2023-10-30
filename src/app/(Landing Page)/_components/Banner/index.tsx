import styles from './index.module.css'
import Image from 'next/image'
import bannerPng from '@/images/banner.png'
import typo from '@/styles/typo.module.css'

export default function Banner() {
    


    return (
        <section className={styles.banner}>
            <h1 className={typo.extraBold22}>Sigortalı Asansörlü Evden Eve Nakliyat <span>Taşımacılık</span> Ve Depolama!</h1>
            <p className={typo.regular18}>Öz Şahin Nakliyat sayesinde eşyalarınız güvenli ve ambalajlı bir şekilde taşır.  Deneyimli ekibimiz sayesinde zaman kaybedilmez ve iş belirlenmiş zamanda bitirilir. Taşıma esnasında ürüne bir zarar gelirse zararınız tazmin edilir.</p>
            <div className={styles.bannerImageWrapper}>
                <Image src={bannerPng} alt={'özşahin evden eve nakliyat'} width={400} priority/>
            </div>            
        </section>
    )
}