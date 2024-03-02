import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const ProfileButton = ({ user, setUser }) => {
    const [ openMenu, setOpenMenu ] = useState(false);
    const navigate = useNavigate();

    const logout = async() => {
        setUser(null);
        localStorage.removeItem("access_token");
        navigate("/");
    }

    return (
        <div className="relative">
           <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover cursor-pointer" onClick={() => setOpenMenu(prev => !prev)} /> 
           <div className={`absolute bg-white py-4 px-10 ${ openMenu ? "flex opacity-100" : "hidden opacity-0" } ease-out rounded-md items-start flex-col gap-2 shadow-lg top-[75px] right-0`}>
            <Link to={"/profile"}>
                Perfil
            </Link>
            <button onClick={logout}>
                Sair
            </button>
           </div>
        </div>
    )
}

export default ProfileButton