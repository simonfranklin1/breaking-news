import React from 'react'
import { Footer, Navbar, Warning } from '../components'
import { Outlet } from 'react-router-dom'

const News = () => {
  return (
    <div className=" bg-white sm:bg-[#F1F1F1] min-h-[100vh] w-full">
      <Warning />
      <Navbar />
      <div className="lg:pt-[115px] pt-[90px] lg:pb-[87px] lg:w-[80%] min-h-[100vh] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default News