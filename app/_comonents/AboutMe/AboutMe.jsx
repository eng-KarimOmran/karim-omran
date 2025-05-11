import React from 'react'

export default function AboutMe({data}) {
    const { content, name } = data;
    console.log(content)
    return (
        content[0].id ? (
        <div className='w-full h-full flex justify-between p-0 flex-col md:flex-row gap-10 lg:gap-0 lg:p-5'>
            <div className='h-full flex flex-col justify-around'>
                <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-lg'>Name:</span>
                    <span className='text-white'>{content[0].Name}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-lg'>Experience:</span>
                    <span className='text-white'>{content[0].Experience}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-lg'>Country:</span>
                    <span className='text-white'>{content[0].Country}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-lg'>State:</span>
                    <span className='text-white'>{content[0].State}</span>
                </div>
            </div>
            <div className='h-full flex flex-col justify-around'>
                <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-lg'>Phone:</span>
                    <span className='text-white'>{content[0].Phone}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-lg'>Email:</span>
                    <span className='text-white'>{content[0].Email}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-lg'>zip Code:</span>
                    <span className='text-white'>{content[0].ZipCode}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-lg'>Languages:</span>
                    <span className='text-white'>{content[0].Languages[0]}</span>
                    <span className='text-white'>{content[0].Languages[1]}</span>
                </div>
            </div>
        </div>
        ) : null
  )
}
