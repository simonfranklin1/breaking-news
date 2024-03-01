import { Footer, Navbar } from "./components"
import { Route, Routes } from "react-router-dom"
import { Home, Search } from "./pages"

function App() {

  return (
    <div className="App bg-[#F1F1F1] min-h-[100vh] w-full">
      <Navbar />
      <div className="py-[130px] w-[80%] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
