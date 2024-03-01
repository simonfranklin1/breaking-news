import React from 'react'
import { limitText } from '../utils/utils'

const Card = ({ title, text, img, likes, comments, top = false }) => {

  //<i class="bi bi-hand-thumbs-up"></i> like
  //<i class="bi bi-hand-thumbs-up-fill"></i> liked

  //<i class="bi bi-chat"></i> comments

  return (
    <div className={`flex flex-col shadow-md rounded-md bg-white overflow-hidden duration-300 hover:shadow-xl cursor-pointer hover:scale-105 w-full ${top? "" : "h-[220px]"}`}>
      <div className="flex justify-between w-full h-full">
        <article className="flex flex-col justify-between p-4">
          <div className="flex flex-col w-full">
            <h2 className={`mb-4 font-bold ${top ? "lg:text-[3rem] lg:leading-[3rem] text-lg" : "lg:text-[1.5rem] text-lg"}`}>{title}</h2>
            <p className={`text-justify ${top ? "lg:text-[1.5rem]" : "text-[.9rem]"}`}>{limitText(text, 150)}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className='flex items-center gap-[.2rem]'>
              <i class="bi bi-hand-thumbs-up"></i>
              <span>{likes.length}</span>
            </div>
            <div className='flex items-center gap-[.2rem]'>
              <i class="bi bi-chat"></i>
              <span>{comments.length}</span>
            </div>
          </div>
        </article>
        <img className='lg:w-[40%] lg:object-cover object-contain object-center' src={img} alt={img} />
      </div>
    </div>
  )
}

export default Card