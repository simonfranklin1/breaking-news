import React, { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom";
import { getPostById, getLocalStorage, commentPost, likePost, deletePost, deleteComment } from "../utils/utils";
import { Loading } from "../components";
import { useBreakingNews } from "../context/breakingNewsContext";
import PostContent from "../components/PostContent";
import PostInteractions from "../components/PostInteractions";
import PostComments from "../components/PostComments";
import { toast } from "react-toastify";

const NewsPage = () => {
  const { user, setWarning } = useBreakingNews();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState(null);
  const [likes, setLikes] = useState(null);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const { id } = useParams();
  const isLogged = getLocalStorage("access_token");
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.scroll({
      top: 0
    })
    if (isLogged && isLogged.token) {
      getPostById(id).then((response) => {
        setPost(response.news);
        setComments(response.news.comments);
        setLikes(response.news.likes);

        const liked = response.news.likes.find((like) => like.userId == isLogged.id);

        if (liked) {
          setAlreadyLiked(true);
        }
      })
    } else {
      navigate("/");
    }

  }, [id])

  const handleComment = (e) => {
    e.preventDefault();

    if (comment.length) {
      commentPost(post.id, comment)
        .then((response) => {
          setComments(response.news.comments);
          toast.success(response.message);
        }).catch((err) => toast.error(err.message));
      setComment("");
    }
  }

  const handleLike = () => {
    likePost(post.id).then(response => {
      if (response.message === "Liked post successfully.") {
        setLikes([...likes, { userId: user.id, createdAt: new Date() }]);
        setAlreadyLiked(true);
        toast.success(response.message)
      } else {
        const removeLike = likes.filter((like) => like.userId !== user.id)
        setLikes(removeLike);
        setAlreadyLiked(false);
        toast.success(response.message);
      }
    })
  }

  const handleDelete = async () => {
    setWarning("Delete")
  }

  const handleDeleteComment = async (idComment) => {
    const response = await deleteComment(id, isLogged.token, idComment)
      .then((response) => {
        const filteredComments = comments.filter((comment) => comment.idComment !== idComment);
        toast.success(response.message);
        setComments(filteredComments);
      }).catch((err) => toast.error(err.message));
  }

  return (
    <>
      {post && (
        <div className="w-full flex flex-col bg-white rounded-lg overflow-hidden relative group font-news">
          <button className={`absolute top-1 right-1 bg-[#2C8AB4] flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full text-white text-xl group-hover:opacity-100 opacity-0 duration-200 ${isLogged.id === post.creator.id ? "block" : "hidden"}`} onClick={() => setOpenMenu(prev => !prev)}>
            <div className="relative">
              <i className="bi bi-three-dots-vertical"></i>
              <div className={`absolute bg-white overflow-hidden ${openMenu ? "flex opacity-100" : "hidden opacity-0"} duration-[.4s] ease-in-out rounded-md items-start flex-col shadow-xl top-[40px] text-base right-0 text-black`}>
                <Link to={"/editPost/" + post.id} className="w-full">
                  <div className="flex items-end gap-2 hover:bg-slate-100 duration-200 pb-2 pt-4 px-8 w-full">
                    <i className="bi bi-pencil-square"></i> Editar
                  </div>
                </Link>
                <div className="flex items-end gap-2 hover:bg-slate-100 duration-200 pt-2 pb-4 px-8 w-full" onClick={handleDelete}>
                  <i className="bi bi-trash3"></i> Deletar
                </div>
              </div>
            </div>
          </button>
          <PostContent post={post} comments={comments} likes={likes} />
          <div className="flex flex-col p-5 pt-0">
            <PostInteractions comment={comment} setComment={setComment} handleComment={handleComment} username={user.username} likes={likes} handleLike={handleLike} alreadyLiked={alreadyLiked} />
            <div className="text-xl pb-5 text-center border-b-2">
              Comentários
            </div>
            <ul className="flex flex-col py-5 gap-5">
              {
                comments.length > 0 && (
                  <PostComments comments={comments} user={isLogged} handleDeleteComment={handleDeleteComment} />
                ) || (
                  <div className="text-lg text-center">
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