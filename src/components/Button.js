import React from 'react'

const Button = ({name}) => {
  return (
    <div className='mt-8 flex items-center'>
        <button className='border-2 px-4 py-1 bg-gray-200 rounded-full hover:bg-gray-400 mx-3'>{name}</button>
    </div>
  )
}

export default Button