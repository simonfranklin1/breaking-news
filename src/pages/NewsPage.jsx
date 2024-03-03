import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, getLocalStorage, limitText, commentPost } from '../utils/utils';
import { Loading } from '../components';
import { useBreakingNews } from '../context/breakingNewsContext';
import PostContent from '../components/PostContent';
import PostInteractions from '../components/PostInteractions';
import PostComments from '../components/PostComments';

const NewsPage = () => {
  const { user } = useBreakingNews();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const { id } = useParams();
  const isLogged = getLocalStorage("access_token");
  const navigate = useNavigate();

  const handleComment = (e) => {
    e.preventDefault();

    if (comment.length) {
      commentPost(post.id, isLogged.token, comment).then(response => setComments(response.news.comments));
      setComment("");
    }
  }

  useEffect(() => {
    if (isLogged && isLogged.token) {
      getPostById(id, isLogged.token).then((response) => {
        setPost(response.news);
        setComments(response.news.comments);
      });
    } else {
      navigate("/");
    }

  }, [id])


  return (
    <>
      {post && (
        <div className='w-full flex flex-col bg-white rounded-md  overflow-hidden'>
          <PostContent post={post} />
          <div className="flex flex-col p-5">
            <PostInteractions comment={comment} setComment={setComment} handleComment={handleComment} user={user} post={post} />
            <ul className="flex flex-col py-5 gap-5">
              {
                comments.length > 0 && (
                  <PostComments comments={comments} />
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