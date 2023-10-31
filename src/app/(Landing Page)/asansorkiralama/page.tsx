import styles from './page.module.css'
import Image from 'next/image'

export default function AsansorKiralama() {
  return (
    <div className={styles.asansorKiralama}>
      <h1>ASANSÖR KİRALAMA</h1>
      <Image src={'/vinc.jpg'} alt='Özşahin asansörlü nakliyat' width={320} height={200} priority></Image>
      <h2>ÖZ ŞAHİN nakliyat asansör kiralama hizmetiyle karşınızda!</h2>
      <p>Yüksek kaliteli taşıma çözümleri sunan ÖZ ŞAHİN Nakliyat, şimdi de asansör kiralama hizmetiyle yanınızda! Eşya taşıma sürecini daha güvenli, hızlı ve pratik hale getirmek için modern ve bakımlı asansörlerimizle hizmetinizdeyiz.</p>
      <p>Artık ağır ve büyük eşyaları merdivenlerden taşımanın zorluklarıyla uğraşmanıza gerek yok. ÖZ ŞAHİN Nakliyat olarak, taşıma işleminizi en üst seviyede kolaylaştırmak için en son teknolojiyle donatılmış asansörlerimizi sunuyoruz. Uzman ekibimiz eşliğinde, eşyalarınızı güvenli bir şekilde yüksek katlara taşımanız artık daha basit ve sorunsuz.</p>
      <p>Siz de taşıma sürecini daha verimli ve güvenli bir hale getirmek için ÖZ ŞAHİN Nakliyat'ın asansör kiralama hizmetinden yararlanabilirsiniz. Detaylı bilgi ve rezervasyon için bize ulaşmaktan çekinmeyin. Eşyalarınızı en iyi şekilde taşımanın keyfini çıkarın!</p>
    </div>
  )
}
