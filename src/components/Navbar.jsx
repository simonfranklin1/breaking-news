import { useState } from "react";
import Logo from "../assets/logo-breaking-news.png"
import { Link, useNavigate } from "react-router-dom"
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.length) {
      navigate("/search/" + search)
      setSearch("")
    } else {
      return;
    }
  }

  return (
    <>
      <nav className="flex w-full justify-between items-center p-4 fixed top-0 z-10 bg-white shadow-md">
        <form className="relative w-[220px] flex items-center" onSubmit={handleSearch}>
          <i className="bi bi-search absolute top-[1] right-1 bg-[#f5f5f5] text-[#757575] rounded-[0.3rem] p-2 z-10"></i>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquise por um título" className="outline-none p-[0.6rem] bg-[#f5f5f5] border-none w-full rounded-[0.3rem] focus:border-[#0bade3] focus:border-[1px] focus:border-solid" />
        </form>

        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[8rem] h-[3.5rem] object-cover cursor-pointer self-center" />
        </Link>

        <ProfileButton />
      </nav>
    </>
  )
}

export default Navbar