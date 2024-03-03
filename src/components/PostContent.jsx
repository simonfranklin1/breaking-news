import { Link } from 'react-router-dom';

const PostContent = ({ post, comments, likes }) => {
  return (
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
                      <span>{likes.length}</span>
                    </div>
                    <div className='flex items-center gap-[.2rem]'>
                      <i className="bi bi-chat"></i>
                      <span>{comments.length}</span>
                    </div>
                  </div>
                </div>
              </article>
              <img className='max-w-[40%] flex-1 object-cover object-center' src={post.banner} alt={post.title} />
            </div>
          </div>
  )
}

export default PostContent