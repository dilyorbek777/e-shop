import Hero from '@/components/Hero';
import Product from '@/components/Product';
import { ProductType } from '@/interface';
import React from 'react'

export default async function HomePage() {
  const res = await fetch('https://fakestoreapi.com/products')

  const products:ProductType[] = await res.json()
 

  return (
    <section className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-52 flex flex-col space-y-12'>
      <Hero/>
      <h1 className='text-5xl font-bold text-center'>E-shop NextJS 13</h1>
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
