import React from 'react'
import { Footer, Navbar, Warning } from '../components'
import { Outlet } from 'react-router-dom'

const News = () => {
  return (
    <div className="App bg-[#F1F1F1] min-h-[100vh] w-full">
      <Warning />
      <Navbar />
      <div className="pt-[115px] pb-[87px] w-[80%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default News