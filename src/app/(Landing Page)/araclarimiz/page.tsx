import Image from 'next/image'
import styles from './page.module.css'

export default function Araclarimiz() {
  return (
    <div className={styles.araclarimiz}>
      <h1>ARAÇLARIMIZ</h1>
      <Image src={'/vinc.jpg'} alt='Özşahin asansörlü nakliyat' width={320} height={200} priority></Image>
      <p>Taşınma sürecinizde ihtiyaç duyduğunuz güvenilir nakliyat hizmeti için en doğru adrestesiniz. Şehir içi veya şehirler arası eşya taşımacılığında sizlere geniş araç seçenekleri sunuyoruz. Eşyalarınızın miktarına ve büyüklüğüne göre 11 m³'ten başlayıp 45 m³'e kadar farklı araç sınıflarıyla hizmetinizdeyiz.</p>
      <p>Deneyimli ve uzman ekibimizle birlikte, eşyalarınızın güvenliğini en üst seviyede tutarak taşıma sürecinizi yönetiyoruz. Eşyalarınızı özenle paketliyor, taşıma sırasında dikkatlice yerleştiriyor ve hedef noktada sorunsuz bir şekilde teslim ediyoruz.</p>
      <p>Müşteri memnuniyetini ön planda tutarak, taşınma sürecinizin her adımında sizlere destek olmaktan mutluluk duyarız. Detaylı bilgi almak, fiyat teklifi almak veya rezervasyon yapmak için bize ulaşmaktan çekinmeyin. Eşyalarınızı güvenle taşımanın huzurunu yaşamak için sizleri bekliyoruz.</p>
    </div>
  )
}
