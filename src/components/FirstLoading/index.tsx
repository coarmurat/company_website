'use client'
import { useState, useEffect } from 'react'
import styles from './index.module.css'

export default function FirstLoading() {
    
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        document.fonts.ready.then((a) => {
            console.log(a)
            setLoading(false)

        })
    },[])

    return (
        isLoading ? 
        <div className={styles.firstLoading}> 
            <div></div>
            <div>Loading...</div> 
        </div> : null
    )
}