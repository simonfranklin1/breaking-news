import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomButton from "../components/CustomButton"
import { postSchema } from '../schemas/schemas';
import { Link } from 'react-router-dom';

const PostForm = ({ post, action, title, handleFunction }) => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(postSchema),
        defaultValues: {
            title: post ? `${post.title}` : "",
            text: post ? `${post.text}` : "",
            banner: post ? `${post.banner}` : "",
        }
    });

    return (
        <form className='bg-white p-8 rounded-md sm:w-[400px] relative shadow-xl' onSubmit={handleSubmit(handleFunction)}>
            <button type='button' className="text-xl font-bold absolute top-2 right-2">
                <Link to={"/"}><i className="bi bi-x-lg"></i></Link>
            </button>
            <div className="text-3xl font-bold">
                {title}
            </div>
            <div className="flex flex-col gap-4 my-5">
                <input type="text" placeholder='Título' {...register("title")} className="px-2 py-1 border-2 rounded-sm" />
                {errors.title?.message && <p className='text-red-600'>{errors.title?.message}</p>}
                <input type="text" placeholder='Banner' {...register("banner")} className="px-2 py-1 border-2 rounded-sm" />
                {errors.banner?.message && <p className='text-red-600'>{errors.banner?.message}</p>}
                <textarea type="text" placeholder='Texto' {...register("text")} className="px-2 py-1 border-2 rounded-sm" />
                {errors.text?.message && <p className='text-red-600'>{errors.text?.message}</p>}
                <CustomButton text={action} type={"submit"} />
            </div>
        </form>
    )
}

export default PostForm