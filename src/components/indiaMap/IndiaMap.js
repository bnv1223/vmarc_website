import React, { useState } from 'react'
import './indiaMap.css'
function IndiaMap() {
    const [data1, setData1]=useState('')
    const [data2, setData2]=useState('')
    const [data3, setData3]=useState('')


  return (
    <>
<div  className='contactUs_img_main'>
        <img className='contactUs_img' src='./img/mapimg.png' alt='map_image'/>
        <div className={`${"shape_main shape_main_location1"} ${data1}`}>
        <div className="shape"></div>
        <div className="shape_text_main">
        <p className='shape_p1'>V-MARC INDIA LIMITED</p>
        <p className='shape_p1'>(Head Office)<br/> Plot Number 3,4 18 &<br/> 
          amp: 20A, Sector iIDC<br/>
          SIDCUL</p>
        </div>
        </div>
        <div onMouseEnter={()=>{setData1('show1')}} onMouseLeave={()=>{setData1('')}} className='location_img_div location_img1'></div>

        {/* ............ */}
        <div className={`${"shape_main shape_main_location2"} ${data2}`}>
        <div className="shape"></div>
        <div className="shape_text_main">
        <p className='shape_p1'>V-MARC INDIA LIMITED</p>
        <p className='shape_p1'>(Head Office)<br/> Plot Number 3,4 18 &<br/> 
          amp: 20A, Sector iIDC<br/>
          SIDCUL</p>
        </div>
        </div>
        <div onMouseEnter={()=>{setData2('show2')}} onMouseLeave={()=>{setData2('')}} className='location_img_div location_img2'></div>

        {/* ............... */}

        <div className={`${"shape_main shape_main_location3"} ${data3}`}>
        <div className="shape"></div>
        <div className="shape_text_main">
        <p className='shape_p1'>V-MARC INDIA LIMITED</p>
        <p className='shape_p1'>(Head Office)<br/> Plot Number 3,4 18 &<br/> 
          amp: 20A, Sector iIDC<br/>
          SIDCUL</p>
        </div>
        </div>
        <div onMouseEnter={()=>{setData3('show3')}} onMouseLeave={()=>{setData3('')}} className='location_img_div location_img3'></div>

        </div>
    </>
  )
}

export default IndiaMap
