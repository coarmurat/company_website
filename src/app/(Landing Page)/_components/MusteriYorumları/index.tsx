"use client"

import { useRef, useState } from 'react'
import styles from './styles.module.css'
import underLine from '@/styles/underLine.module.css'

export default function MusteriYorumlari() {
    const profilesDomElementRef = useRef<HTMLDivElement>(null)
    const textsDomElementRef = useRef<HTMLDivElement>(null)
    const currentReviewIndex = useRef<number>(0)
    const [showLeftButton, setShowLeftButton] = useState(false)
    const [showRightButton, setShowRightButton] = useState(true)
    const [reviews, setReviews] = useState([
        {
            name:'Abc A.',
            star:1,
            text:'Abc A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque dignissimos sequi voluptatum eligendi! Quidem laudantium, possimus blanditiis recusandae, exercitationem, dolore ullam fugiat asperiores obcaecati vitae dolores provident explicabo incidunt.',
            current:true
        },
        {
            name:'Abc B.',
            star:2,
            text:'Abc B. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio voluptates doloremque ratione, asperiores minus atque quidem fugit nulla deserunt voluptas ex recusandae dolor, autem id ab? Quisquam, tenetur cum.',
            current:false
        },
        {
            name:'Abc C.',
            star:3,
            text:'Abc C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos officiis beatae recusandae, quia ipsum repudiandae corrupti. Maxime alias excepturi ratione modi, adipisci beatae hic repudiandae laboriosam aut voluptatem nemo.',
            current:false
        },
        {
            name:'Abc D.',
            star:4,
            text:'Abc D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam tenetur odit, ipsam eveniet aut, assumenda minus qui dolor expedita earum ea sed ratione. Alias quas quisquam corrupti veritatis a?',
            current:false
        },
        {
            name:'Abc E.',
            star:5,
            text:'Abc E. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ratione consectetur veniam quas iste aperiam rem delectus, dignissimos quia modi laborum, provident perferendis illum officia. Perferendis omnis praesentium tenetur obcaecati?',
            current:false
        },
        {
            name:'Abc F.',
            star:4,
            text:'Abc F. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi neque vel dolorem, quidem beatae mollitia quam sapiente, saepe ducimus obcaecati optio, perferendis natus omnis dolore hic culpa velit quis?',
            current:false
        }
    ])
    
    const handleButton = (direction:1 | -1) => {
        
        console.log('index: ',currentReviewIndex.current)
        if(direction === -1 && currentReviewIndex.current === 0){

            console.log('begin')
            return
        }else if(direction === 1 && currentReviewIndex.current === reviews.length - 1){

            console.log('end')
        }else{
            currentReviewIndex.current += direction
            setShowLeftButton( _ => true )
            setShowRightButton( _ => true )
            if(currentReviewIndex.current === 0){
                setShowLeftButton( _ => false )
            }else if(currentReviewIndex.current === reviews.length -1){
                setShowRightButton( _ => false )
            }
            setReviews((previousReviews) =>
            previousReviews.map((review, index) => ({
                ...review,
                current: index === currentReviewIndex.current ? true : false,
            })))
            profilesDomElementRef.current!.style.transform = `translateX(calc((-${currentReviewIndex.current} * (100% / 3)) + (100% / 3)))`
            textsDomElementRef.current?.scrollTo({
                left: currentReviewIndex.current * textsDomElementRef.current.clientWidth,
                behavior: 'smooth',
            })
        }

        
    }

    return(
        <section className={styles.musteriYorumlari}>
            <h2 className={underLine.className}>Müşteri Yorumları</h2>
            <div className={styles.customers}>
                <div className={`${styles.left} ${showLeftButton ? '' : styles.hide}`} onClick={() => handleButton(-1)}></div>
                <div className={styles.slides}>
                    <div className={styles.profiles} ref={profilesDomElementRef}>
                        {
                            reviews.map((reviev,index) => (
                                <div className={`${styles.profile} ${reviev.current ? styles.middleProfile : '' }`} key={index}>
                                    <div className={styles.photo}></div>
                                    <div className={styles.name}>{reviev.name}</div>
                                    <div className={styles.stars}>
                                        <div className={reviev.star / 1 >= 1 ? styles.pointed: ''}></div>
                                        <div className={reviev.star / 2 >= 1 ? styles.pointed: ''}></div>
                                        <div className={reviev.star / 3 >= 1 ? styles.pointed: ''}></div>
                                        <div className={reviev.star / 4 >= 1 ? styles.pointed: ''}></div>
                                        <div className={reviev.star / 5 >= 1 ? styles.pointed: ''}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={`${styles.right} ${showRightButton ? '' : styles.hide}`} onClick={() => handleButton(1)}></div>
            </div>
            <div className={styles.reviews} ref={textsDomElementRef}>
                {reviews.map((review, index) => <p key={index}>{review.text}</p>)}
            </div>
        </section>
    )
}