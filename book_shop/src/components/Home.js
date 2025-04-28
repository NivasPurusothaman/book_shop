import React from 'react'
import TopBar from './TopBar'
import Categories from './Categories'
import TopSelling from './TopSelling'
import Trending from './Trending'
import banner from "../assets/banner.jpg";

function Home() {
  return (
    <div>
      <TopBar />
      <div className='mb-4'>
        <img src={banner} className='w-full' />
      </div>
      <Categories />
      <TopSelling />
      <Trending />
    </div>
  )
}

export default Home
