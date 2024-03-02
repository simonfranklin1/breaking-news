import React from 'react'
import { useForm } from "react-hook-form"
import CustomButton from "./CustomButton"
import { useBreakingNews } from '../context/breakingNewsContext';

const SigninForm = () => {
    const { register, handleSubmit } = useForm();
    const { setBackground, setForm } = useBreakingNews();
    
    const dino = (data) => {
        const { email, password } = data;
    }

    return (
        <form className='bg-white p-8 rounded-md sm:w-[400px] relative' onSubmit={handleSubmit(dino)}>
            <button className="text-xl font-bold absolute top-2 right-2" onClick={() => setBackground(false)}>
            <i className="bi bi-x-lg"></i>
            </button>
            <div className="text-3xl font-bold">
                Entrar
            </div>
            <div className="flex flex-col gap-4 my-5">
                <input type="email" placeholder='Email' {...register("email", { required: true})} className="px-2 py-1 border-2 rounded-sm" />
                <input type="password" placeholder='Senha' {...register("password", { required: true, minLength: 8})} className="px-2 py-1 border-2 rounded-sm" />
                <CustomButton text={"ENTRAR"} type={"submit"} />
            </div>
            <div className='text-center'>
                Não tem uma conta? <span className="text-blue-500 font-semibold hover:underline cursor-pointer" onClick={() => setForm("signup")}>Cadastre-se</span>
            </div>
        </form>
    )
}

export default SigninForm