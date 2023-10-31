import styles from './page.module.css'
import homeSVG from '@/styles/images/home.module.css'
import closedBoxSVG from '@/styles/images/closedBox.module.css'
import boxGroupSVG from '@/styles/images/boxGroup.module.css'
import truckSVG from '@/styles/images/truck.module.css'
import assemblySVG from '@/styles/images/assembly.module.css'
import openBoxSVG from '@/styles/images/openBox.module.css'
import controlSVG from '@/styles/images/control.module.css'

export default function EvOfisTasimaciligi() {
  return (
    <div className={styles.evOfisTasimaciligi}>
      <h1>EV VE OFİS TAŞIMACILIĞI</h1>
      <p>Özşahin Nakliyat ev ve ofis taşımacılığı hizmeti verilirken eşyalarınızı özenle ambalajlar ve taşıma süreci titizlikle yönetir.Taşıma işlemi boyunca şu adımlar izler:</p>
      <p className={homeSVG.className}><strong>Ücretsiz Ekspertiz:</strong> Taşıma öncesinde bir uzman gelir, eşyalarınızı inceler ve taşıma planını yapar. Bu aşamada taşınacak eşyaların türü ve miktarı değerlendirilir.</p>
      <p className={closedBoxSVG.className}><strong>Eşya Paketleme:</strong> Eşyalarınızın güvenliği için özel ambalaj malzemeleri kullanılır. Balonlu naylon, köpük, karton kutular gibi çeşitli malzemeler eşyalarınıza uygun şekilde seçilir.</p>
      <p className={boxGroupSVG.className}><strong>Dikkatli Yükleme:</strong> Eşyalarınız taşıma aracına dikkatlice yüklenir. Ağır eşyaların altta olması ve dengeli bir yükleme yapılması sağlanır.</p>
      <p className={truckSVG.className}><strong>Güvenli Taşıma:</strong> Eşyalarınız, deneyimli taşıma ekibi tarafından güvenli bir şekilde yeni adresinize taşınır. Trafik ve yol durumu göz önünde bulundurularak en uygun rota seçilir.</p>
      <p className={assemblySVG.className}><strong>Mobilya Demontaj ve Montajı:</strong> Büyük mobilyaların demontajı yapılır ve taşıma sonrası montajları gerçekleştirilir. Bu, eşyalarınızın güvenli taşınması ve zarar görmesinin önlenmesi için önemlidir.</p>
      <p className={openBoxSVG.className}><strong>İndirme ve Düzenleme:</strong> Eşyalarınız taşıma sonrası belirlenen odalara yerleştirilir. Mobilyaların montajı yapılır ve kutular düzenlenir.</p>
      <p className={controlSVG.className}><strong>Son Kontroller:</strong> Eşyalarınızın taşıma sonrası durumu kontrol edilir ve taşıma esnasında meydana gelmiş bir hasar varsa zararınız tazmin edilir.</p>
      <p>Öz Şahin Nakliyat eşyarınızı bu adımları istisnasız takip ederek sorunsuz bir şekilde taşır. Eşyalar paketlendiği ve streçlendiği için taşıma sırasında zarar görme ihtimali en aza indirilir. Olduki yinede taşıma esnasın da zarar gördü diyelim eşyanızın zararı karşılanır ve mutlu bir müşteri profili bırakır. Öz Şahin nakiyat bilir ki mutlu bir müşteri pozitif bir etki. Pozitif bir etki başka işlerin kapısını açar. Bizi tercih ettiğiniz için teşekkür eder iyi günler dileriz. </p>
      <p>Bize ulaşmak ve fiyat almak için iletişim sayfamızı ziyaret edebilirsiniz.</p>
    </div>
  )
}
