import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='w-full min-h-[calc(100dvh-80px)] flex justify-center items-center fadeIn-content-Min flex-col gap-5'>
      <div className='text-[var(--main-color)] text-9xl font-bold'>404</div>
      <div className='text-4xl'>PAGE NOT FOUND</div>
      <Link className='border-2 px-12 py-2 text-sm rounded-2xl hover:scale-110 transition-all duration-300' href={"/"}>BACK TO HOME</Link>
    </div>
  )
}
