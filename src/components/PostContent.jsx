import { Link } from 'react-router-dom';

const PostContent = ({ post, comments, likes }) => {
  return (
    <div className={`flex flex-col w-full min-h-[400px]`}>
      <div className="flex lg:flex-row flex-col-reverse justify-between flex-1 gap-5 p-5 ">
        <article className="flex flex-col justify-between gap-5 lg:w-[50%]">
          <div className="flex flex-col w-full">
            <h2 className={`mb-4 font-bold lg:text-[2.5rem] lg:leading-[3rem]`}>{post.title}</h2>
            <p className={`text-justify lg:text-[1.1rem]`}>{post.text}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <div className=" w-auto">
              <Link to={"/profile/" + post.creator.id}>
                by <span className='text-[#2C8AB4] hover:underline'>@{post.creator.username}</span>
              </Link>
            </div>
            <div className="flex items-center justify-between gap-4">
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
        <img className='lg:w-[50%] object-cover rounded-md' src={post.banner} alt={post.title} />
      </div>
    </div>
  )
}

export default PostContent