import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

const ProfileButton = ({ user, setUser }) => {
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ showIcon, setShowicon ] = useState(false)
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

    const goToCreatePost = () => {
        setOpenMenu(prev => !prev);
        navigate("/createPost/");
    }

    return (
        <button className="relative">
            <img src={user.avatar} alt={user.name} className="w-14 h-14 border-[2px] border-blue-500 object-cover overflow-hidden rounded-full cursor-pointer" onClick={() => setOpenMenu(prev => !prev)} onMouseEnter={() => setShowicon(true)} onMouseLeave={() => setShowicon(false)} />
            <div className={`absolute pointer-events-none bg-black opacity-30 rounded-full w-full h-full top-0 left-0 ${ showIcon ? "block" : "hidden"} duration-300 ease-in-out`}>
            </div>
            <i className={`bi bi-list text-white pointer-events-none text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${ showIcon ? "block" : "hidden"} duration-300 ease-in-out`}></i>
            <div className={`absolute bg-white ${openMenu ? "flex opacity-100" : "hidden opacity-0"} ease-in-out rounded-md overflow-hidden items-start flex-col shadow-lg top-[75px] right-0`}>
                <div className='flex w-full items-end gap-2 hover:bg-slate-100 duration-200 py-2 pt-4 px-8' onClick={goToCreatePost}>
                    <i className="bi bi-pencil-square"></i> Criar
                </div>
                <div className='flex w-full items-end gap-2 hover:bg-slate-100 duration-200 py-2 px-8' onClick={goToProfile}>
                    <i className="bi bi-person-square"></i> Perfil
                </div>
                <div onClick={logout} className='flex w-full items-end gap-2 hover:bg-slate-100 duration-200 py-2 pb-4 px-8'>
                    <i className="bi bi-box-arrow-left"></i> Sair
                </div>
            </div>
        </button>
    )
}

export default ProfileButton