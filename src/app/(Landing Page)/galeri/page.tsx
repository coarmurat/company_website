import styles from './page.module.css'
import Slider from './_components/slider'

export default function Galeri() {
  return (
    <>
      <Slider/>
      <section className={styles.text}>
        <p>
          Değerli Müşterilerimiz, <br/><br/>
          Ev taşıma hizmetimizi incelediğiniz için teşekkür ederiz. Galerimizdeki görseller, daha önce gerçekleştirdiğimiz taşıma projelerinden örnekler sunar. Bizim için her bir taşıma işi özel bir sorumluluktur ve her detayı titizlikle ele alınırız.
        </p>
        <p>
        Ev taşıma konusundaki deneyimimizle, eşyalarınızı güvenli ve hızlı bir şekilde yeni adresinize taşımayı taahhüt ediyoriz. Bizimle çalışarak, taşınma sürecinizi sorunsuz ve rahat bir şekilde tamamlamanızı sağlamak amacındayız.
        </p>
        <p>
        Eğer sizin için ne yapabileceğimize dair daha fazla bilgi almak veya hizmetlerimiz hakkında konuşmak isterseniz, lütfen iletişim sayfasındaki bilgileri kullanarak bize ulaşın. Teşekkür ederiz.
        </p>
      </section>
    </>
  )
}
