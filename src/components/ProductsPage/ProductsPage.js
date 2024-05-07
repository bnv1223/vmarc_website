import React from 'react'
import "./ProductsPage.css"
// import styles from "./ProductsPage.module.css"
function ProductsPage({ productData }) {
  return (
    <>
      <div className={"ProductsPage_main"}>
        <div className={"ProductsPage_container_box"}>
          <div className={"ProductsPage_text_box"}>
            <button className={"ProductsPage_Category_button"}><p>{productData?.category} </p> </button>

            <h2 className={"ProductsPage_hero_text"}> {productData?.name}</h2>
            <p>A LAN cable is a conductor that connects devices in a Local Area Network (LAN) with a network connector. The network cable provides communication between several devices (computers, routers, switches,…).</p>
            <div className={"ProductsPage_hero_bottam_tex_main"}>
              <div className='ProductsPage_hero_bottam_tex'>
                <div className='ProductsPage_hero_bottam_link1'><p>Standards </p><img src='/img/video.svg' height={'16px'} width={'16px'} /> </div>
                <p className='ProductsPage_hero_bottam_link2'>IS-1554 (Part -1) 1988</p>
              </div>

              <div className='ProductsPage_hero_bottam_tex'>
                <div className='ProductsPage_hero_bottam_link1'><p>Conductor </p><img src='/img/video.svg' height={'16px'} width={'16px'} /> </div>
                <p className='ProductsPage_hero_bottam_link2'>Solid Bare Copper</p>
              </div>

              <div className='ProductsPage_hero_bottam_tex'>
                <div className='ProductsPage_hero_bottam_link1'><p>Insulation </p><img src='/img/video.svg' height={'16px'} width={'16px'} /> </div>
                <p className='ProductsPage_hero_bottam_link2'>High Density Polyethylene</p>
              </div>
            </div>
            <div className={"ProductsPage_button_main"}>
              <button className={"ProductsPage_button2"}><img src='/img/video.svg' /><p>Contact </p> </button>
              <button className={"ProductsPage_button1"}><img src='/img/video.svg' /><p>Download Brochure</p> </button>
            </div>
          </div>
          <div className='ProductsPage_right_img_box'>
            <div className='ProductsPage_right_img_main'>
              <img className={"ProductsPage_right_img"} src='/img/prodact_right.png' />
            </div>
            <div className='ProductsPage_right_text_box'>
              Color Variants
            </div>
          </div>
        </div>
        <div className={"ProductsPage_earth_image_main"}>
          <img className={"ProductsPage_earth_image"} src='/img/earth.png' />
        </div>
      </div>
      <div className={"ProductsContent_main"} style={{
        width: "100%",
        display: "flex",
        color: "white",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        margin: "60px 0px"
      }}>
        {
          productData.description.map((item, key) => {
            return <>
              <div style={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }} className={"ProductsContent_Item_main"}>
                <h3 style={{
                  fontSize: "2rem"
                }}>{item.title}</h3>
                <div>
                  {item.content.map((cItem, key) => {
                    return <p style={{
                      textAlign: "justify"
                    }}>
                      {cItem}
                    </p>
                  })}
                  {item?.bullets?.map((bItem, key) => {
                    return <p style={{
                      padding: "14px"
                    }}>
                      {key + 1}.{bItem}
                    </p>
                  })}
                </div>
              </div>
            </>
          })
        }
      </div>
    </>
  )
}

export default ProductsPage
