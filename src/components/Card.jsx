import React from 'react'

const Card = ({ title, text, img, likes, comments }) => {

  //<i class="bi bi-hand-thumbs-up"></i> like
  //<i class="bi bi-hand-thumbs-up-fill"></i> liked

  //<i class="bi bi-chat"></i> comments

  return (
    <div className="flex flex-col gap-4 max-w-full shadow-md rounded-md bg-white p-8">
      <article className="flex items-center gap-4 justify-center">
        <div>
          <h2 className='mb-4'>{title}</h2>
          <p>{text}</p>
        </div>
        <img className='w-[30%] object-cover object-center' src={img} alt={img} />
      </article>

      <article className="flex items-center gap-4">
        <div className='flex items-center gap-[.2rem]'>
          <i class="bi bi-hand-thumbs-up"></i>
          <span>{likes.length}</span>
        </div>

        <div className='flex items-center gap-[.2rem]'>
          <i class="bi bi-chat"></i>
          <span>{comments.length}</span>
        </div>
      </article>
    </div>
  )
}

export default Card