import Logo from "../assets/logo-breaking-news.png"

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full justify-between items-center p-4 fixed top-0 z-10 bg-white shadow-sm">
        <div className="relative w-[220px] flex items-center">
          <i className="bi bi-search absolute top-[1] right-1 bg-[#f5f5f5] text-[#757575] rounded-[0.3rem] p-2 z-10"></i>
          <input type="text" placeholder="Pesquise por um título" className="outline-none p-[0.6rem] bg-[#f5f5f5] border-none w-full rounded-[0.3rem] focus:border-[#0bade3] focus:border-[1px] focus:border-solid" />
        </div>

        <img src={Logo} alt="Logo" className="w-[8rem] h-[3.5rem] object-cover cursor-pointer self-center" />

        <button className="text-white bg-[#0bade3] border-none outline-none text-[1rem] rounded-md font-medium py-2 px-4 uppercase ease-in-out duration-[0.4s] hover:bg-[#0a86af]">
          Entrar
        </button>
      </nav>
    </>
  )
}

export default Navbar