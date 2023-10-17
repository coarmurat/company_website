"use client"

import styles from './index.module.css'
import typo from '@/styles/typo.module.css'
import { Phone } from '@/components/icons'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function TopCallRow() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false)
    },[])    

    return(
        <div className={styles.topCallRow}>
            <Link className={typo.bold12} href="tel:+905326771928">FİYAT TEKLİFİ İÇİN <span>TIKLA</span> ARA!</Link>
            <button className={isLoading ? '' : styles.showCallButton } onClick={() => window.location.href = 'tel:+905326771928'}>
                <Phone/>
                <span>0532 677 19 28</span>
            </button>
        </div>
    )
}