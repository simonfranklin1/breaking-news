import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomButton from "../components/CustomButton"
import { signupSchema } from '../schemas/schemas';
import { Link } from 'react-router-dom';

const UserForm = ({ user, handleFunction, title, action }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: user ? user.name : "",
            username: user ? user.username : "",
            email: user ? user.email : "",
            password: user ? user.password : "",
            avatar: user ? user.avatar : "",
            background: user ? user.background : ""
        }
    });


    return (
        <form className='bg-white p-8 rounded-md sm:min-w-[400px] relative shadow-xl' onSubmit={handleSubmit(handleFunction)}>
            <button type='button' className="text-xl font-bold absolute top-2 right-2">
                <Link to={"/"}><i className="bi bi-x-lg"></i></Link>
            </button>
            <div className="text-3xl font-bold">
                {title}
            </div>
            <div className="flex flex-col gap-2 my-5">
                <div className="w-full">
                    <input type="text" placeholder='Nome Completo' {...register("name")} className="px-2 py-1 border-2 rounded-sm w-full" />
                    {errors.name?.message && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="w-full">
                    <input type="email" placeholder='Email' {...register("email")} className="px-2 py-1 border-2 rounded-sm w-full" />
                    {errors.email?.message && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="w-full">
                    <input type="password" placeholder='Senha' {...register("password")} className="px-2 py-1 border-2 rounded-sm w-full" />
                    {errors.password?.message && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <div className="w-full">
                    <input type="text" placeholder='Link da foto de perfil' {...register("avatar")} className="px-2 py-1 border-2 rounded-sm w-full" />
                    {errors.avatar?.message && <p className='text-red-600'>{errors.avatar?.message}</p>}
                </div>
                <div className="w-full">
                    <input type="text" placeholder='Link da imagem de fundo' {...register("background", { required: true, minLength: 8 })} className="px-2 py-1 border-2 rounded-sm w-full" />
                    {errors.background?.message && <p className='text-red-600'>{errors.background?.message}</p>}
                </div>
                <CustomButton text={action} type={"submit"} />
            </div>
            <div className='text-center'>
                Já tem uma conta? <span className="text-blue-500 font-semibold hover:underline cursor-pointer"><Link to="/signin">Faça Login</Link></span>
            </div>
        </form>
    )
}

export default UserForm