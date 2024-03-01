import { useEffect, useState } from "react"
import { Navbar } from "./components"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return (
    <div className="App bg-[#F1F1F1] h-[100vh] w-full">
      <Navbar />
      <div className="pt-[130px] w-[80%] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
