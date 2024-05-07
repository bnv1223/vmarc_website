import React from 'react'
import './products.css'
function Products() {
  return (
    <div className='products_main_div'>
     <div className='products_main block '>
      <div className='products_top_main'>
        <div className='products_left'>
        <p className='Our_Products'>Our Products</p>
         <p className='products-p1'>V-Marc Manufacturing Unit is well equiped with modern plant and <br/>
         machinery and have complete testing equiptment backed up with <br/>
          well qualified and trained personnel.</p>
         <p className='products-p2'>
         V-Marc 3 Core Flat Cables are used by quality conscious electrical <br/>
         contractors and recommended by leading consultants, Builders for <br/>
          projects, domestic, industrial & agricultural use</p>
        </div>
        <div className='products_right_main'>
          <div className='products_search_main' >
          <input className='products_search_box' type='search' name='search' placeholder='search'/>
          <button className='products_search_button' > icon</button>
          </div>
        </div>
        
      </div>
      <div className='products_mid_main'>
        <div className='products_nav_main'>
        <a className='products_nav_link' >Cables</a>
        <a className='products_nav_link' >Switches</a>
        <a className='products_nav_link' >MCB's</a>
        <a className='products_nav_link' >RCCB's</a>
        </div>
      </div>
      <div className='products_bottom_main'>
      <div className='products_img_main'>
        <div className='products_imag_div'>
        {/* <img className='products_imag' src='/img/Frame2.png' alt='products.png'/> */}
        </div>
        <div className='products_img_text_main'>
          <p className='products_img_text_p1'>Light duty Cables</p>
          <p className='products_img_text_p2'>VIEW PRODUCT</p>
        </div>
      </div>

      <div className='products_img_main'>
        <div className='products_imag_div'>
        {/* <img className='products_imag' src='/img/Frame2.png' alt='products.png'/> */}
        </div>
        <div className='products_img_text_main'>
          <p className='products_img_text_p1'>LT Cables</p>
          <p className='products_img_text_p2'>VIEW PRODUCT</p>
        </div>
      </div>

      <div className='products_img_main'>
        <div className='products_imag_div'>
        {/* <img className='products_imag' src='/img/Frame2.png' alt='products.png'/> */}
        </div>
        <div className='products_img_text_main'>
          <p className='products_img_text_p1'>Light duty Cables</p>
          <p className='products_img_text_p2'>VIEW PRODUCT</p>
        </div>
      </div>
      </div>
      
     </div>
    </div>
  )
}

export default Products
