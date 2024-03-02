import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/utils';
import ProfileImage from "../assets/alternative-image.png";

const ProfilePage = () => {
    const [ user, setUser ] = useState(null);
    const [ posts, setPosts ] = useState(null);

    const isLogged = getLocalStorage("access_token");

    return (
        <>
            <div className="flex flex-col h-[275px] rounded-md overflow-hidden">
                <div className="flex flex-col flex-1 bg-[#D9D9D9] p-5 pb-0 relative">
                    <div className="absolute bg-white w-[172px] h-[172px] rounded-full overflow-hidden border-[5px] border-white">
                        <img src={ProfileImage} alt="profile" className='object-cover w-full h-full' />
                    </div>
                    <button className='w-[40px] h-[40px] rounded-full bg-white text-[#2C8AB4] text-xl self-end'>
                        <i class="bi bi-pencil-square"></i>
                    </button>
                </div>
                <div className="flex flex-1 justify-between bg-white p-5 pt-0">
                    <div className="flex flex-col self-end">
                        <div className="text-2xl font-bold">
                            Username
                        </div>
                        <div className="text-lg">
                            @username
                        </div>
                    </div>
                    <div className="h-[30.48px] w-[30.48px] bg-[#2C8AB4] text-white text-xl self-end flex justify-center items-center rounded-full">
                        <i className="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage