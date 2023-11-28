import React, { useState } from 'react'
import img5 from "../images/home.png"
import img6 from "../images/explore.png"
import img7 from "../images/subscription.png"
import img8 from "../images/library.png"
import img9 from "../images/history.png"
import img10 from "../images/playlist.png"
import img11 from "../images/messages.png"
import img12 from "../images/show-more.png"
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) return null
  
  return (
    <div className='h-full pe-4'>
      <div className='flex items-center pb-4 pt-4'>
        <img src={img5} className='mx-4 h-8' alt="home" />
        <p className='text-lg text-[#ed3833]'>Home</p>
      </div>
      <div className='flex items-center pb-4'>
        <img src={img6} className='mx-4 h-8' alt="home" />
        <p className='text-lg text-gray-600'>Explore</p>
      </div>
      <div className='flex items-center pb-4'>
        <img src={img7} className='mx-4 h-8' alt="home" />
        <p className='text-lg text-gray-600'>Subscription</p>
      </div>
      <div className='flex items-center pb-4'>
        <img src={img8} className='mx-4 h-8' alt="home" />
        <p className='text-lg text-gray-600'>Library</p>
      </div>
      <div className='flex items-center pb-4'>
        <img src={img9} className='mx-4 h-8' alt="home" />
        <p className='text-lg text-gray-600'>History</p>
      </div>
      <div className='flex items-center pb-4'>
        <img src={img10} className='mx-4 h-8' alt="home" />
        <p className='text-lg text-gray-600'>Playlist</p>
      </div>
      <div className='flex items-center pb-4'>
        <img src={img11} className='mx-4 h-8' alt="home" />
        <p className='text-lg text-gray-600'>Messages</p>
      </div>
      <div className='flex items-center pb-4'>
        <img src={img12} className='mx-4 h-8' alt="home" />
        <p className='text-lg text-gray-600'>Show more</p>
      </div>
    </div>
  )
}

export default Sidebar