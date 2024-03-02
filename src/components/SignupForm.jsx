import { useForm } from "react-hook-form"
import CustomButton from "./CustomButton"

const SignupForm = () => {
    const { register, handleSubmit } = useForm()
    
    const signup = () => {

    }

    return (
        <form className='bg-white p-8 rounded-md' onSubmit={handleSubmit()}>
            <div className="text-2xl font-bold">
                Cadastro
            </div>
            <div className="flex flex-col">
                <input type="email" placeholder='Email' {...register("Email", { required: true})} />
                <input type="password" placeholder='Password' {...register("Password", { required: true})} />
                <CustomButton text={"Entrar"} type={"submit"} />
            </div>
            <div className="text-lg">
                Já tem uma conta? <span className="text-blue-500 font-semibold hover:underline">Faça login</span>
            </div>
        </form>
    )
}

export default SignupForm