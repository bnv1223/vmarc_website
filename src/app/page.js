'use client';
import AboutUs from "@/components/aboutUs/AboutUs";
import styles from "./page.module.css"
import Hero from "@/components/hero/Hero";
import NaveBar from "@/components/naveBar/NaveBar";
import Products from "@/components/products/Products";
import LounchingSoon from "@/components/lounchingSoon/LounchingSoon";
import ContactUs from "@/components/contactUs/ContactUs";

export default function Home() {
  return (
   <div className={styles.main}> 
   <NaveBar/>
   <Hero/>
   <AboutUs/>
   <Products/>
   <LounchingSoon/>
   <ContactUs/>
   {/* <div style={{backgroundColor:'black', height:'100vh'}}></div> */}
   </div>
  );
}
