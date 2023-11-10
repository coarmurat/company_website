import styles from './index.module.css'
import smileSVG from '@/styles/images/smile.module.css'
import personalSVG from '@/styles/images/personal.module.css'
import secureSVG from '@/styles/images/secure.module.css'
import clockSVG from '@/styles/images/clock.module.css'
import promiseSVG from '@/styles/images/promise.module.css'
import checkSVG from '@/styles/images/check.module.css'
import underLine from '@/styles/underLine.module.css'

export default function SirketPolitikamiz() {
    
    return(
        <section className={styles.sirketPolitikamiz}>
            <h2 className={underLine.className}>Şirket Politikamız</h2>
            <div className={styles.politikalar}>
                <div className={styles.politika1}>
                    <h3>Güler Yüzlü Hizmet</h3>
                    <p className={smileSVG.className}>Öncelikli hedefimiz iş bitirmek değildir. Müşteriye her zaman dinler ve anlayışla karşılarız. Yaptığımız işin arkasında memmun müşteri bırakmak isteriz.</p>
                </div>
                <div className={styles.politika2}>
                    <h3>Deneyimli Kadro</h3>
                    <p className={personalSVG.className}>Profesyonel taşımacılık deneyimi ile donatılmış ekibimiz, her detayı titizlikle ele alır. Hassas eşyalarınızı en güvenli şekilde paketlerken, büyük mobilyalarınızı dikkatlice taşır.</p>
                </div>
                <div className={styles.politika3}>
                    <h3>Güvenli Taşıma</h3>
                    <p className={secureSVG.className}>Eşyalarınızın hem yüklenirken hem indirilirken zarar görmemesi için planlı programlı çalışma yapılır. Böylece oluşabilecek anormalliklerin önüne geçilir.</p>
                </div>
                <div className={styles.politika4}>
                    <h3>Zamanında Teslimat</h3>
                    <p className={clockSVG.className}>Eşya yükleme ve teslimat işlemi, özenli planlama ve zamanında hareket edilerek gerçekleştirilir. Bu sayede iş belirtilen zaman dışına çıkmadan bitirilir.</p>
                </div>
                <div className={styles.politika5}>
                    <h3>Sigortalı Nakliyat</h3>
                    <p className={promiseSVG.className}>Taşıdığımız ürünler sizin için ne kadar değerliyse bizim içinde o kadar değerli. Taşıma esnasında ürüne bir zarar gelirse zararınız karşılanır.</p>
                </div>
                <div className={styles.politika6}>
                    <h3>Son Kontroller</h3>
                    <p className={checkSVG.className}>Taşıma sonrası eşyaların son durumu kontrol edilir ve eşyalar uygun yerlere yerleştirilir. Üründe taşıma esnasında herhangi bir zarar geldiği görülürse sigortalı nakliyat hizmetimiz devreye girer.</p>
                </div>
            </div>
       </section>
    )
}