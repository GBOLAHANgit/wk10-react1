import React from 'react'
import { data } from '@/app/page'
import Image from 'next/image'

export default function page({params}) {

    const star = data.find(pro => pro.id === params.slugs)
  return (
    <section>
        <h1>Name:{star.name}</h1>
        <Image src={star.image} alt={star.name} width={500} height={400}/>
        <p>profession: {star.profession}</p>
        <p></p>
        <p></p>
        </section>
  )
}
