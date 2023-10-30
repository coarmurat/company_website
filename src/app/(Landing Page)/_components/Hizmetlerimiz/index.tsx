import styles from './styles.module.css'
import underLine from '@/styles/underLine.module.css'
import typo from '@/styles/typo.module.css'

import homeSVG from '@/styles/images/home.module.css'
import homeToHomeSVG from '@/styles/images/homeToHome.module.css'
import sendSVG from '@/styles/images/send.module.css'
import whatsappSVG from '@/styles/images/whatsapp.module.css'
import callCenterSVG from '@/styles/images/callCenter.module.css'
import phoneSVG from '@/styles/images/phone.module.css'


export default function Hizmetlerimiz() {

  return (
    <section className={styles.hizmetlerimiz}>
      <h2 className={`${typo.bold20} ${underLine.className}`}>Hizmetlerimiz</h2>
      <div className={styles.hizmetler}>
        <div>
          <h3 className={typo.medium16}>Ücretsiz Ekspertiz</h3>
          <p className={`${typo.regular14} ${styles.home} ${homeSVG.className}`}>Evden Eve Nakliyat öncesi planlı,programlı çalışma yapılabilmesi ve en uygun fiyatın belirlenebilmesi için ücretsiz ekspertiz desteği sunuyoruz.</p>
        </div>
        <div>
          <h3 className={typo.medium16}>Evden Eve Nakliyat</h3>
          <p className={`${typo.regular14} ${styles.homeToHome} ${homeToHomeSVG.className}`}>Şehir içi veya şehirler arası kaliteli, güvenli ve sigortalı taşımacılık yapıyoruz. Taşıdığımız ürünler bizim güvencemiz altında olmakla beraber taşıma sırasında ürün herhangi bir zarar görürse zararınız karşılanır.</p>
        </div>
        <div className={styles.hizmet3}>
          <h3 className={typo.medium16}>Fotoğrafla fiyat alma</h3>
          <p className={typo.regular14}>WhatsAPP uygulaması üzerinden tarafımaza ileteceğiniz fotoğraflar ile firmamızdan en uygun fiyatı alabilirsiniz detaylı bir şekilde fotoğraf göndermeyi ve evin büyüklüğü ve kaçıncı katta olduğunu yazmayı lütfen unutmayın.</p>
          <button className={`${typo.regular14} ${styles.button} ${styles.whatsapp} ${sendSVG.className} ${whatsappSVG.className}`}>Ara</button>
        </div>
        <div className={styles.hizmet4}>
          <h3 className={typo.medium16}>Telefonla fiyat alma</h3>
          <p className={typo.regular14}>Bir telefon kadar uzağınızdayız. Bizimle iletişime geçerek en uygun fiyatı alabilir ve aklınızdaki tüm soruları çekinmeden sorabilirsinz.</p>
          <button className={`${typo.regular14} ${styles.button} ${callCenterSVG.className} ${phoneSVG.className}`}>Ara</button>
        </div>
      </div>
    </section>
  )
}