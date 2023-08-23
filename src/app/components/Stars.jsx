import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function stars({star}) {
     
    const topstars = star.map(pro => ( 
    <aside key={pro.id}>
    <Link href= {`/stars/${pro.id}`}>
    <Image src={pro.image} alt={pro.name} width={300} height={300}/>
    <h1> {pro.name} </h1>
    <h2>{pro.nationality}</h2>
    <h2>{pro.net_worth}</h2>
    </Link>
    </aside>))
  
   
  
    return (
    <section className=' grid  md:grid-cols-3 gap-3  lg:grid-cols-4  sm:grid-cols-2'>
        {topstars}
    </section>
  )
}
