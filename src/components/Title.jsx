import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='justify-center items-center text-3xl flex'>
        <div className=''>
        <p className='text-3xl font-serif font-bold mt-4 mb-2' >{text1} <span>{text2}</span></p>
        </div>
    </div>
  )
}

export default Title