import CustomButton from "./CustomButton";
import { useBreakingNews } from "../context/breakingNewsContext";
import { Link } from 'react-router-dom';

const ProfileButton = () => {
    const { user } = useBreakingNews();

    return (
        <>
            {
                user && (
                    <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-contain" />
                ) || (
                    <Link to={"/signin"}>
                        <CustomButton text={"entrar"} />
                    </Link>
                )
            }
        </>
    )
}

export default ProfileButton