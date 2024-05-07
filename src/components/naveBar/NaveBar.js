import React from 'react'
import styles from "./NaveBar.module.css"
import Image from 'next/image'
import Link from 'next/link'


const NaveBar = () => {
  return (
    <div className={styles.naveBar_Main}>
        <div className={styles.left_box}>
        <Image
        className={styles.logo_Image}
      src="/img/logo.png"
      width={135}
      height={90}
      alt="logo.png"
    />
        </div>
     <div className={styles.right_box}>
         <Link href={'/'} >Home</Link>
         <Link href={'#'} >About Us</Link>
         <Link href={'/products/product'} >Product</Link>
         <Link href={'/leadershipteam'} >Investor</Link>
         <Link href={'#'} >Career</Link>
         <Link href={'#'} >Contact US</Link>
      </div>
      
    </div>
  )
}

export default NaveBar
