"use client"

import styles from './styles.module.css'
import softTriangleSVG from '@/styles/images/softTriangle.module.css'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function Slider() {
    const wrapperDomElementRef = useRef<HTMLDivElement>(null)
    const [showLeftButton,setShowLeftButton] = useState(false)
    const [showRightButton,setShowRightButton] = useState(true)
    const [images, setImages]  = useState([
        {
            src:'/banner.png',
            alt:'dd'

        },
        {
            src:'/banner.png',
            alt:'dd'

        },
        {
            src:'/banner.png',
            alt:'dd'

        },
        {
            src:'/banner.png',
            alt:'dd'

        },
        {
            src:'/banner.png',
            alt:'dd'

        },
        {
            src:'/banner.png',
            alt:'dd'

        }
    ])
    const [imageNumber, setImageNumber]  = useState(0)
    const imageNuberIndexRef = useRef<number>(0)

    const handleClick = (direction: -1 | 1) => {

        if(direction === -1 && imageNuberIndexRef.current === 0){

            console.log('begin')
            return
        }else if(direction === 1 && imageNuberIndexRef.current === images.length - 1){

            console.log('end')
        }else{
            imageNuberIndexRef.current += direction
            setImageNumber( _ => imageNuberIndexRef.current)
            setShowLeftButton( _ => true )
            setShowRightButton( _ => true )
            if(imageNuberIndexRef.current === 0){
                setShowLeftButton( _ => false )
            }else if(imageNuberIndexRef.current === images.length -1){
                setShowRightButton( _ => false )
            }
            console.log(imageNuberIndexRef.current)
            wrapperDomElementRef.current!.style.transform = `translateX(calc( ${imageNuberIndexRef.current} * (-100% - 50px) ))`
        }

        
    }

    return (
        <section className={styles.slider}>
            <div className={`${styles.slides} ${softTriangleSVG.className}`}>
                <button className={`${styles.left} ${showLeftButton ? '' : styles.hide}`} onClick={ () => handleClick(-1)}></button>
                <div className={styles.wrapper} ref={wrapperDomElementRef}>
                    {images.map((image, index) => (
                        <div className={styles.slide} key={index}>
                            <Image src={image.src} alt={image.alt} width={200} height={200} priority></Image>
                        </div>
                    ))}
                </div>
                <button className={`${styles.right} ${showRightButton ? '' : styles.hide}`} onClick={ () => handleClick(1)}></button>
            </div>
            <div className={styles.imageNumber}>
                <span>{imageNumber + 1}</span>
                <span>/{images.length}</span>
            </div>
        </section>
    )
}