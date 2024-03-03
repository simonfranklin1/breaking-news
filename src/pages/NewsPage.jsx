import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, getLocalStorage, limitText, commentPost } from '../utils/utils';
import CommentContainer from '../components/Comment';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import { useBreakingNews } from '../context/breakingNewsContext';

const NewsPage = () => {
  const { user } = useBreakingNews();
  const [ post, setPost ] = useState(null);
  const [ comment, setComment ] = useState("");
  const { id } = useParams();
  const isLogged = getLocalStorage("access_token");
  const navigate = useNavigate();

  const handleComment = (e) => {
      e.preventDefault();

      if(comment.length) {
        commentPost(post.id, isLogged.token, comment)
      }
  }

  useEffect(() => {
    if (isLogged && isLogged.token) {
      getPostById(id, isLogged.token).then(response => setPost(response.news));
    } else  {
      navigate("/");
    }

  }, [])


  return (
    <>
      {post && (
        <div className='w-full flex flex-col bg-white rounded-md  overflow-hidden'>
          <div className={`flex flex-col cursor-pointer w-full min-h-[400px] mb-5`}>
            <div className="flex justify-between w-full h-full flex-1 gap-5">
              <article className="flex flex-col justify-between p-5 gap-5">
                <div className="flex flex-col w-full">
                  <h2 className={`mb-4 font-bold lg:text-[3rem] lg:leading-[3rem]`}>{post.title}</h2>
                  <p className={`text-justify lg:text-[1.5rem]`}>{post.text}</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <Link to={"/profile/" + post.creator.id}>
                    <div className="text-[#2C8AB4]">
                      by @{post.creator.username}
                    </div>
                  </Link>
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
              <img className='w-[40%] flex-1 object-cover object-center' src={post.banner} alt={post.title} />
            </div>
          </div>
          <div className="flex flex-col p-5">
            <div className="flex items-center gap-4 w-full py-5 border-b-2 border-t-2">
              <button className='flex items-center gap-[.2rem]'>
                <i className="bi bi-hand-thumbs-up"></i>
                <span>Gostei</span>
              </button>
              <button className='flex items-center gap-[.2rem]'>
                <i className="bi bi-chat"></i>
                <span>Comentar</span>
              </button>
            </div>
            <form className='flex w-full py-5' onSubmit={handleComment}>
              <input type="text" placeholder={"Adicione um comentário como " + user.username} value={comment} onChange={(e) => setComment(e.target.value)} className="outline-none p-[0.6rem] bg-[#f5f5f5] border-[transparent] w-full rounded-full focus:border-[#0bade3] border-[1px] focus:border-solid" />
            </form>
            <ul className="flex flex-col py-5">
              {
                post.comments.length > 0 && (
                  post.comments.map((comment) => (
                    <CommentContainer key={comment.idComment} comment={comment} />
                  ))
                ) || (
                  <div className="text-xl text-center">
                    Nenhum Comentário
                  </div>
                )
              }
            </ul>
          </div>
        </div>
      ) || (
          <Loading />
        )}
    </>
  )
}

export default NewsPage