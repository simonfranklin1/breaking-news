import { useForm } from "react-hook-form"
import CustomButton from "./CustomButton"
import { useBreakingNews } from "../context/breakingNewsContext";

const SignupForm = () => {
    const { register, handleSubmit } = useForm();
    const { setBackground, setForm } = useBreakingNews();
    
    const signup = (data) => {
        const { name, username, email, password, avatar, background } = data;
    }

    return (
        <form className='bg-white p-8 rounded-md sm:min-w-[400px] relative' onSubmit={handleSubmit(signup)}>
            <button className="text-xl font-bold absolute top-2 right-2" onClick={() => setBackground(false)}>
            <i className="bi bi-x-lg"></i>
            </button>
            <div className="text-3xl font-bold">
                Cadastro
            </div>
            <div className="flex flex-col gap-4 my-5">
                <input type="text" placeholder='Nome Completo' {...register("email", { required: true})} className="px-2 py-1 border-2 rounded-sm" />
                <input type="text" placeholder='Nome de Usuário' {...register("password", { required: true, minLength: 8})} className="px-2 py-1 border-2 rounded-sm" />
                <input type="text" placeholder='Link do Avatar' {...register("email", { required: true})} className="px-2 py-1 border-2 rounded-sm" />
                <input type="text" placeholder='Link da imagem de fundo' {...register("password", { required: true, minLength: 8})} className="px-2 py-1 border-2 rounded-sm" />
                <input type="email" placeholder='Email' {...register("email", { required: true})} className="px-2 py-1 border-2 rounded-sm" />
                <input type="password" placeholder='Senha' {...register("password", { required: true, minLength: 8})} className="px-2 py-1 border-2 rounded-sm" />
                <CustomButton text={"CADASTRAR"} type={"submit"} />
            </div>
            <div className='text-center'>
                Já tem uma conta? <span className="text-blue-500 font-semibold hover:underline cursor-pointer" onClick={() => setForm("signin")}>Cadastre-se</span>
            </div>
        </form>
    )
}

export default SignupForm