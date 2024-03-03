import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const ProfileButton = ({ user, setUser }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    const logout = async () => {
        setUser(null);
        localStorage.removeItem("access_token");
        navigate("/");
    }

    const goToProfile = () => {
        setOpenMenu(prev => !prev);
        navigate("/profile/" + user._id);
    }
    
    return (
        <button className="relative">
            <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover cursor-pointer" onClick={() => setOpenMenu(prev => !prev)} />
            <div className={`absolute bg-white py-4 px-8 ${openMenu ? "flex opacity-100" : "hidden opacity-0"} ease-out rounded-md items-start flex-col gap-2 shadow-lg top-[75px] right-0`}>
                <div className='flex items-end gap-2' onClick={goToProfile}>
                    <i className="bi bi-person-square"></i> Perfil
                </div>
                <div onClick={logout} className='flex items-end gap-2'>
                    <i className="bi bi-box-arrow-left"></i> Sair
                </div>
            </div>
        </button>
    )
}

export default ProfileButton