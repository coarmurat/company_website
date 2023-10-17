'use client'
import { useState, useEffect } from 'react'
import styles from './index.module.css'

export default function FirstLoading() {
    
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(() => false)
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