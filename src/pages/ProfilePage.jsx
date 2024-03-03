import React, { useEffect, useState } from 'react'
import { getLocalStorage, getUser, getUserPosts } from '../utils/utils';
import ProfileImage from "../assets/alternative-image.png";
import { useNavigate, useParams } from 'react-router-dom';
import NewsContainer from "../components/NewsContainer";
import { Loading } from '../components';

const ProfilePage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate();

    const isLogged = getLocalStorage("access_token");
    const loggedUser = isLogged ? isLogged.id : null;

    useEffect(() => {
        if (isLogged && isLogged.token) {
            getUser(id, isLogged.token).then(response => setUser(response));

            getUserPosts(id, isLogged.token).then(response => setPosts(response));
        } else {
            navigate("/");
        }
    }, [id]);

    return (
        <>
            <div className="flex flex-col h-[275px] rounded-md overflow-hidden mb-5">
                <div className={`flex flex-col flex-1  bg-cover bg-center p-5 pb-0 relative`} style={user ? { backgroundImage: `url(${user.background})` } : { background: "#D9D9D9" }}>
                    <div className="absolute bg-white w-[172px] h-[172px] rounded-full overflow-hidden border-[5px] border-white z-10">
                        <img src={user ? user.avatar : ProfileImage} alt="profile" className='object-cover w-full h-full' />
                    </div>
                    <button className={`w-[40px] h-[40px] rounded-full bg-white text-[#2C8AB4] text-xl self-end ${id === loggedUser ? "flex" : "hidden"} justify-center items-center hover:scale-105 duration-300 cursor-pointer`} onClick={() => navigate("/editUser/" + isLogged.id)}>
                        <i className="bi bi-pencil-square"></i>
                    </button>
                </div>
                <div className="flex flex-1 justify-between bg-white p-5 pt-0">
                    <div className="flex flex-col self-end">
                        <div className="text-2xl font-bold">
                            {user ? user.name : "...carregando"}
                        </div>
                        <div className="text-lg">
                            @{user ? user.username : "...carregando"}
                        </div>
                    </div>
                    <button className={`h-[30.48px] w-[30.48px] bg-[#2C8AB4] text-white text-xl self-end flex justify-center items-center rounded-full ${id === loggedUser ? "flex" : "hidden"} justify-center items-center hover:scale-105 duration-300 cursor-pointer`}>
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>
            </div>

            {
                posts && posts.results && (
                    <NewsContainer posts={posts.results} search={true} />
                ) || !posts && (
                    <Loading />
                ) || (
                    posts.message && (
                        <div className="text-xl text-center pt-8">
                            Nenhum post encontrado
                        </div>
                    )
                )
            }
        </>
    )
}

export default ProfilePage