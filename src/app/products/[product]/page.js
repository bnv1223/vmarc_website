import ProductsPage from '@/components/ProductsPage/ProductsPage'
import NaveBar from '@/components/naveBar/NaveBar'
import React, { Suspense } from 'react'
import products from '../../../../public/data/productsData'

export async function getPageData(product) {
  const id = product// Get ID from slug `/book/1` 
  const data = products.find((ele) => ele.identifier == id) || undefined;
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data)
    } else {
      reject()
    }
  })
}
export default async function page({ params: { product } }) {
  const productData = await getPageData(product)
  return (
    <div >
      <NaveBar />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsPage productData={productData} />
      </Suspense>
    </div>
  )
}

