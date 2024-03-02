import React from 'react'
import { useForm } from "react-hook-form"
import CustomButton from "./CustomButton"
import { useBreakingNews } from '../context/breakingNewsContext';

const SigninForm = () => {
    const { register, handleSubmit } = useForm();
    const { setBackground } = useBreakingNews();
    
    const dino = (data) => {
        console.log(data)
    }

    return (
        <form className='bg-white p-8 rounded-md sm:w-[400px] relative' onSubmit={handleSubmit(dino)}>
            <button className="text-2xl font-bold absolute top-1 right-3" onClick={() => setBackground(false)}>x</button>
            <div className="text-3xl font-bold">
                Entrar
            </div>
            <div className="flex flex-col gap-4 my-5">
                <input type="email" placeholder='Email' {...register("email", { required: true})} className="px-2 py-1 border-2 rounded-sm" />
                <input type="password" placeholder='Password' {...register("password", { required: true, minLength: 8})} className="px-2 py-1 border-2 rounded-sm" />
                <CustomButton text={"Entrar"} type={"submit"} />
            </div>
            <div className='text-center'>
                Não tem uma conta? <span className="text-blue-500 font-semibold hover:underline cursor-pointer">Cadastre-se</span>
            </div>
        </form>
    )
}

export default SigninForm