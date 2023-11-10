import styles from './styles.module.css'
import underLİne from '@/styles/underLine.module.css'

export default function NedenBiz() {
    
    return(
        <section className={styles.nedenBiz}>
            <div className={styles.wrapper}>
                <h2 className={underLİne.className}>Neden Bizi Tercih Etmelisiniz?</h2>
                <p>Öz Şahin Nakliyat olarak, sizlere diğer firmalardan farklı iki hizmet sunmaktan gurur duyuyoruz. </p>
                <p>Ücretsiz Ekspertiz Hizmetimiz sayesinde, evinizin ve eşyalarınızın durumu, uzman ekibimiz tarafından ücretsiz olarak değerlendirilir. Böylece taşıma maliyetini önceden bilir ve sürpriz fiyatlarla karşılaşma riskini ortadan kaldırırsınız. Aynı zamanda, taşıma ücretini beğenmediğiniz takdirde taşıma işleminden vazgeçebilirsiniz.</p>
                <p>İkinci olarak, birçok firmanın sunmadığı sigortalı taşımacılık hizmeti ile eşyalarınızın güvenliği bizim önceliğimizdir. Taşıma sırasında herhangi bir zarar durumunda, zararınızı karşılayarak mağduriyetinizi gideririz. Bu sayede eşyalarınızı taşırken tam bir güven içinde olabilirsiniz.</p>
                <p>Öz Şahin Nakliyat olarak amacımız, taşıma deneyiminizi en iyi şekilde yaşatmak ve sizin için endişeleri ortadan kaldırmaktır. Ayrıca aşağıdaki yorumları inceleyerek önceden çalıştığımız müşterilerin geri bildirimlerini görebilirsiniz.</p>
            </div>
        </section>
    )
}