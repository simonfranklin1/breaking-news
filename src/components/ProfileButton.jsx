import CustomButton from "./CustomButton";
import { useBreakingNews } from "../context/breakingNewsContext";
import { Link } from 'react-router-dom';

const ProfileButton = ({user}) => {

    return (
        <>
           <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-contain relative" /> 
        </>
    )
}

export default ProfileButton