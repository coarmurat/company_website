import styles from './page.module.css'
import commonStyles from '@/styles/common.module.css'
import typo from '@/styles/typo.module.css'
import Banner from '@/components/Banner'
import { Home as HomeSVG, HomeToHome, Send, CallCenter, Whatsapp, Phone } from  '@/components/icons'
import SSS from '@/components/SSS'


export default function Home() {
  return (
    <>
      <Banner/>
      <div className={styles.hizmetlerimiz}>
        <h2 className={`${typo.bold20} ${commonStyles.underLine}`}>Hizmetlerimiz</h2>
        <div className={styles.hizmetler}>
          <div>
            <h3 className={typo.medium16}>Ücretsiz Ekspertiz</h3>
            <p className={typo.regular14}>Evden Eve Nakliyat öncesi planlı,programlı çalışma yapılabilmesi ve en uygun fiyatın belirlenebilmesi için ücretsiz ekspertiz desteği sunuyoruz.</p>
            <div className={styles.iconsRow}>
              <HomeSVG/>
            </div>
          </div>
          <div>
            <h3 className={typo.medium16}>Evden Eve Nakliyat</h3>
            <p className={typo.regular14}>Şehir içi veya şehirler arası kaliteli, güvenli ve sigortalı taşımacılık yapıyoruz. Taşıdığımız ürünler bizim güvencemiz altında olmakla beraber taşıma sırasında ürün herhangi bir zarar görürse zararınız karşılanır.</p>
            <div className={styles.iconsRow}>
              <div className={styles.iconsRowCol}></div>
              <div className={styles.iconsRowCol}>
                <HomeToHome/>
              </div>              
              <div className={`${styles.iconsRowCol} ${styles.flexEnd}`}>
                <button>
                  <Whatsapp/>
                  <span className={typo.regular14}>Gönder</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3 className={typo.medium16}>Fotoğrafla fiyat alma</h3>
            <p className={typo.regular14}>WhatsAPP uygulaması üzerinden tarafımaza ileteceğiniz fotoğraflar ile firmamızdan en uygun fiyatı alabilirsiniz detaylı bir şekilde fotoğraf göndermeyi ve evin büyüklüğü ve kaçıncı katta olduğunu yazmayı lütfen unutmayın.</p>
            <div className={styles.iconsRow}>
              <div className={styles.iconsRowCol}></div>
              <div className={styles.iconsRowCol}>
                <Send/>
              </div>
              <div className={`${styles.iconsRowCol} ${styles.flexEnd}`}>
                <button>
                  <Phone/>
                  <span className={typo.regular14}>Ara</span>
                </button>
              </div>              
            </div>
          </div>
          <div>
            <h3 className={typo.medium16}>Telefonla fiyat alma</h3>
            <p className={typo.regular14}>Bir telefon kadar uzağınızdayız. Bizimle iletişime geçerek en uygun fiyatı alabilir ve aklınızdaki tüm soruları çekinmeden sorabilirsinz.</p>
            <div className={styles.iconsRow}>
              <CallCenter/>
            </div>
          </div>
        </div>
      </div>  
      <SSS/>
    </>
  )
}
