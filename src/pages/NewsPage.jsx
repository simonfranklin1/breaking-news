import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, getLocalStorage, limitText } from '../utils/utils';

const NewsPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const isLogged = getLocalStorage("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged.token) {
      getPostById(id, isLogged.token).then(response => setPost(response.news));
    } else {
      navigate("/");
    }

  }, [])


  return (
    <>
      {post && (
        <div className='w-full flex flex-col bg-white rounded-md'>
          <div className={`flex flex-col overflow-hidden cursor-pointer w-full h-[400px]`}>
            <div className="flex justify-between w-full h-full">
              <article className="flex flex-col justify-between p-5">
                <div className="flex flex-col w-full">
                  <h2 className={`mb-4 font-bold lg:text-[3rem] lg:leading-[3rem]`}>{post.title}</h2>
                  <p className={`text-justify lg:text-[1.5rem]`}>{limitText(post.text, top ? 120 : 80)}</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className="text-[#2C8AB4]">
                    by @{post.creator.username}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className='flex items-center gap-[.2rem]'>
                      <i className="bi bi-hand-thumbs-up"></i>
                      <span>{post.likes.length}</span>
                    </div>
                    <div className='flex items-center gap-[.2rem]'>
                      <i className="bi bi-chat"></i>
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                </div>
              </article>
              <img className='w-[40%] h-full lg:object-cover object-center rounded-md' src={post.banner} alt={post.title} />
            </div>
          </div>
          <div className="flex flex-col p-5">
            <div className="flex items-center gap-4 w-full pb-6 border-b-2">
              <div className='flex items-center gap-[.2rem]'>
                <i className="bi bi-hand-thumbs-up"></i>
                <span>Gostei</span>
              </div>
              <div className='flex items-center gap-[.2rem]'>
                <i className="bi bi-chat"></i>
                <span>Comentar</span>
              </div>
            </div>
            <ul className="flex flex-col pt-6">
              {post.comments.map((comment) => (
                <li className="flex flex-col">
                  {comment.idComment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) || (
          <div className="text-xl w-full text-center mt-8">...Carregando</div>
        )}
    </>
  )
}

export default NewsPage