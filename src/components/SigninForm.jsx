import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomButton from "./CustomButton"
import { useBreakingNews } from '../context/breakingNewsContext';
import { signinSchema } from '../schemas/schemas';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {
    const { register, handleSubmit, formState: { errors },} = useForm({ resolver: zodResolver(signinSchema)});
    const { setBackground, setForm } = useBreakingNews();
    const navigate = useNavigate();

    const handleSignIn = async (data) => {
        const { email, password } = data;

        try {
            const response = await fetch("https://api-breakingnews-08eu.onrender.com/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const data = await response.json();

            if(data) {
                localStorage.setItem("access_token", JSON.stringify({ token: data.token, id: data.id }));
                setToken({ token: data.token, id: data.id })
                navigate("/");
            }
            
        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <form className='bg-white p-8 rounded-md sm:w-[400px] relative' onSubmit={handleSubmit(handleSignIn)}>
            <button className="text-xl font-bold absolute top-2 right-2" onClick={() => setBackground(false)}>
                <i className="bi bi-x-lg"></i>
            </button>
            <div className="text-3xl font-bold">
                Entrar
            </div>
            <div className="flex flex-col gap-4 my-5">
                <div>
                    <input type="email" placeholder='Email' {...register("email")} className="px-2 py-1 border-2 rounded-sm mb-2" />
                    {errors.email?.message && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div>
                    <input type="password" placeholder='Senha' {...register("password")} className="px-2 py-1 border-2 rounded-sm mb-2" />
                    {errors.password?.message && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <CustomButton text={"ENTRAR"} type={"submit"} />
            </div>
            <div className='text-center'>
                Não tem uma conta? <span className="text-blue-500 font-semibold hover:underline cursor-pointer" onClick={() => setForm("signup")}>Cadastre-se</span>
            </div>
        </form>
    )
}

export default SigninForm