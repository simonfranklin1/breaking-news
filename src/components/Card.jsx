import React from 'react'
import { limitText } from '../utils/utils'
import { useNavigate } from "react-router-dom"
import { useBreakingNews } from "../context/breakingNewsContext";

const Card = ({ id, title, text, banner, likes, comments, creator, top = false }) => {
  const { user, setWarning } = useBreakingNews();
  const navigate = useNavigate();

  const handlePost = () => {
    if(!user) {
      setWarning("Login")
    } else {
      navigate("/news/" + id)
    }
  }

  return (
    <div onClick={handlePost}>
      <div className={`flex flex-col sm:shadow-md rounded-md bg-white overflow-hidden duration-300 sm:hover:shadow-xl sm:hover:scale-[1.02] cursor-pointer lg:w-full h-full ${ top ? "lg:h-[375px]" : "lg:h-[235px] h-[450px] max-h-[450px]"}`}>
        <div className="flex lg:flex-row flex-col-reverse justify-between w-full h-full">
          <article className="flex flex-col justify-between p-5 flex-1">
            <div className="flex flex-col w-full">
              <h2 className={`mb-4 font-bold ${top ? "lg:text-[3rem] lg:leading-[3.3rem]" : "lg:text-[1.5rem] leading-[1.5rem] text-lg"}`}>{title}</h2>
              <p className={`text-justify ${top ? "lg:text-[1.5rem]" : "text-[.9rem]"}`}>{limitText(text, top ? 120 : 80)}</p>
            </div>
            <div className='flex flex-col gap-1'>
              <div className="text-[#2C8AB4]">
                by @{creator.username}
              </div>
              <div className="flex items-center gap-4">
                <div className='flex items-center gap-[.2rem]'>
                  <i className="bi bi-hand-thumbs-up"></i>
                  <span>{likes.length}</span>
                </div>
                <div className='flex items-center gap-[.2rem]'>
                  <i className="bi bi-chat"></i>
                  <span>{comments.length}</span>
                </div>
              </div>
            </div>
          </article>
          <img className='lg:w-[40%] w-full lg:h-full h-[50%] lg:object-cover rounded-md sm:rounded-none' src={banner} alt={banner} />
        </div>
      </div>
    </div>
  )
}

export default Card