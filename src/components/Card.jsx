import React from 'react'
import { limitText } from '../utils/utils'
import { Link } from "react-router-dom"

const Card = ({ title, text, banner, likes, comments, creator, top = false }) => {

  return (
    <div className={`flex flex-col shadow-md rounded-md bg-white overflow-hidden duration-300 hover:shadow-xl cursor-pointer w-full ${top ? "h-[350px]" : "h-[230px]"}`}>
      <div className="flex justify-between w-full h-full">

        <article className="flex flex-col justify-between p-5">
          <div className="flex flex-col w-full">
            <h2 className={`mb-4 font-bold ${top ? "lg:text-[3rem] lg:leading-[3rem] text-lg" : "lg:text-[1.5rem] text-lg"}`}>{title}</h2>
            <p className={`text-justify ${top ? "lg:text-[1.5rem]" : "text-[.9rem]"}`}>{limitText(text, top ? 120 : 80)}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <Link to={"/profile/" + creator.id}>
              <div className="text-[#2C8AB4]">
                @{creator.username}
              </div>
            </Link>
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

        <img className='w-[40%] h-full lg:object-cover object-center' src={banner} alt={banner} />

      </div>
    </div>
  )
}

export default Card