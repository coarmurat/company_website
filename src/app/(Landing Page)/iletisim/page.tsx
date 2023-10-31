import styles from './page.module.css'

export default function Iletisim() {
  return (
    <div className={styles.iletisim}>
      <h1>İletişim Bilgilerimiz</h1>
      <p className={styles.contact}>
        <a href='tel:+05326771928'> <strong>Telefon: </strong> 0532 677 19 28</a>
        <a href='mailto:info@ozsahinnakliyat.com'><strong>E-posta:</strong> info@ozsahinnakliyat.com</a>
      </p>
      <p>
        Değerli Müşterilerimiz, <br/><br/>
        Size ulaşmak bizim için önemlidir. Herhangi bir soru, görüş veya öneriniz varsa, lütfen çekinmeden bize ulaşın. Profesyonel ekibimiz size en iyi şekilde yardımcı olmaktan mutluluk duyacaktır.
      </p>
      <p>
        Telefon: İş saatleri içerisinde telefonla bize ulaşabilirsiniz. Eğer meşgulsek veya ulaşamıyorsanız, lütfen whatsapp üzerinden iletişim bilgilerinizi bırakın sizinle en kısa zamanda iletişime geçeceğiz.
      </p>
      <p>
        E-posta: E-posta yoluyla da bizimle iletişime geçebilirsiniz. Sorularınızı, taleplerinizi veya geri bildirimlerinizi bize iletebilirsiniz. E-posta yoluyla gelen iletilere genellikle 24 saat içerisinde cevap veriyoruz. Bizimle iletişime geçmek için her iki iletişim kanalını da kullanabilirsiniz. 
      </p>
      <p>
        Sizinle işbirliği yapmaktan ve sizin için değer yaratmaktan heyecan duyuyoruz.
      </p>
      <p>
        Saygılarımızla, Özşahin Nakliyat. 
      </p>
    </div>
  )
}
