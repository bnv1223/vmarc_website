import React from 'react'
import './LounchingSoon.css'
function LounchingSoon() {
  return (
    <div className='lounchingSoon_main_div'>
        <div className='lounchingSoon_main lounchingSoon_block'>
            <div className='lounchingSoon_heading_main'>  
            <p className='lounchingSoon_heading'>LounchingSoon</p>
            </div>

            <div className='lounchingSoon_img_main_div'>
                <div className='lounchingSoon_img_main'>
                     <img className='lounchingSoon_img' src='/img/lounchingSoon1.png' alt='lounchingSoon1.png'/>
                </div>

                <div className='lounchingSoon_img_main'>
                     <img className='lounchingSoon_img' src='/img/lounchingSoon2.png' alt='lounchingSoon1.png'/>
                </div>
                <div className='lounchingSoon_img_main'>
                     <img className='lounchingSoon_img' src='/img/lounchingSoon3.png' alt='lounchingSoon1.png'/>
                </div>
                <div className='lounchingSoon_img_main'>
                     <img className='lounchingSoon_img' src='/img/lounchingSoon3.png' alt='lounchingSoon1.png'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LounchingSoon
