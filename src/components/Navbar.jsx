import { useState } from "react";
import Logo from "../assets/logo-breaking-news.png";
import { Link, useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import CustomButton from "./CustomButton";
import { useBreakingNews } from "../context/breakingNewsContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { user, setUser } = useBreakingNews();

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
      <nav className="flex w-full justify-between items-center p-4 fixed top-0 z-20 bg-white shadow-md">
        <form className="relative w-[220px] flex items-center" onSubmit={handleSearch}>
          <button type="submit" className="absolute top-[1] right-1 bg-[#f5f5f5] text-[#757575] rounded-[0.3rem] p-2 z-10">
            <i className="bi bi-search"></i>
          </button>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquise por um título" className="outline-none p-[0.6rem] bg-[#f5f5f5] w-full rounded-[0.3rem] border-[transparent] focus:border-[#0bade3] border-[1px] focus:border-solid" />
        </form>

        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[8rem] h-[3.5rem] object-cover cursor-pointer self-center" />
        </Link>

        {
          user && (
            <ProfileButton user={user} setUser={setUser} />
          ) || (
            <Link to={"/signin"}>
              <CustomButton text={"entrar"} />
            </Link>
          )
        }
      </nav>
    </>
  )
}

export default Navbar