import styles from './index.module.css'
import typo from '@/styles/typo.module.css'
import underLine from '@/styles/underLine.module.css'

export default function SSS() {

    const sss = [
        {
            id:1,
            header:'Hizmet alanlarınız neler?',
            paragraph:'Evet, asansörlü taşıma yapmak ilk tercihimiz hem işlerin hızlı yürümesi hem de daha güvenli taşıma için asansörlü taşıma yapıyoruz.'
        },
        {
            id:2,
            header:'Asansörlü taşıma yapıyor musunuz?',
            paragraph:'Evet, asansörlü taşıma yapmak ilk tercihimiz hem işlerin hızlı yürümesi hem de daha güvenli taşıma için asansörlü taşıma yapıyoruz.'
        },
        {
            id:3,
            header:'Beyaz eşya bağlantılarını yapıyormusunuz?',
            paragraph:'Evet, asansörlü taşıma yapmak ilk tercihimiz hem işlerin hızlı yürümesi hem de daha güvenli taşıma için asansörlü taşıma yapıyoruz.'
        },
        {
            id:4,
            header:'Sigortalı taşımacılık nedir?',
            paragraph:'Evet, asansörlü taşıma yapmak ilk tercihimiz hem işlerin hızlı yürümesi hem de daha güvenli taşıma için asansörlü taşıma yapıyoruz.'
        },
        {
            id:5,
            header:'Diğer firmalardan farkınız nedir?',
            paragraph:'Evet, asansörlü taşıma yapmak ilk tercihimiz hem işlerin hızlı yürümesi hem de daha güvenli taşıma için asansörlü taşıma yapıyoruz.'
        }
    ]

    return(
        <section className={styles.sss}>
            <h1 className={`${typo.bold14} ${underLine.className}`}>Sık Sorulan Sorular</h1>
            {
                sss.map(row => (
                    <div className={styles.row} key={row.id}>
                        <input type='radio' id={`${row.id}`} name='accordion' hidden />
                        <label className={styles.row} htmlFor={`${row.id}`}>                
                            <div>
                                <h2 className={typo.bold14}>{row.id}. {row.header}</h2>
                                <div className={styles.icon}></div>
                            </div>
                            <p>{row.paragraph}</p>
                        </label>
                    </div>
                ))
            }
       </section>
    )
}