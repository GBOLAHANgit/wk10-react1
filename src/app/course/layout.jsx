import React from 'react'
import CourseNav from '../components/CourseNav'

export const metadata = {
    title: 'Course information',
    description: 'Generated by create next app',
  }

export default function layout({children}) {
  return (
    <div>
        <CourseNav />

    <section className='flex space-x-2'>
          {children}
    </section>
    </div>
  )
}
