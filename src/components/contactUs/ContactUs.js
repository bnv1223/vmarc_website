import React, { useState } from 'react'
import './contactUs.css'
import IndiaMap from '../indiaMap/IndiaMap'

function ContactUs() {
  const [data, setData]=useState('')
  const cssSeting = ()=>{
    if(data==''){
      setData("show")
    }else{
      setData('')
    }
    // alert("aaa")
  }
  
  return (
    <div className='contactUs_main-div'>
        <div className='contactUs_main contactUs_block'>
        <div className='contactUs_text_main'>
        <p className='contactUs_text_p1'>FIND US</p>
        <p className="contactUs_text_heading">
        Find the closest V-Marc Cable<br/> 
        and Wires Branch Office and <br/>
        Contact Information
        </p>
        <p className='contactUs_text_p2'>
        V-Marc Manufacturing Unit is well equipped with modern plant machinery and have complete <br/>
         testing equipment backed up with well qualified and trained personnel.
        </p>
        <button className='contactUs_button'>ContactUs</button>
        </div>
        
        <IndiaMap/>
        </div>
    </div>
  )
}

export default ContactUs
