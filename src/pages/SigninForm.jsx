import React from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "../components/CustomButton"
import { useBreakingNews } from "../context/breakingNewsContext";
import { signinSchema } from "../schemas/schemas";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../utils/utils";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"

const SigninForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(signinSchema) });
    const navigate = useNavigate();
    const { setUser, setLoading, loading } = useBreakingNews();

    const handleSignIn = async (values) => {
        const { email, password } = values;

        setLoading(true);
        
        try {
            const data = await login(email, password);

            if (data.token) {
                toast.success(data.message);
                getUser(data.id, data.token).then(response => setUser(response));
                localStorage.setItem("access_token", JSON.stringify({ token: data.token, id: data.id }));
                navigate("/");
            } else {
                return
            }

        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false);
        }

    }

    return (
        <form className="bg-white p-8 rounded-md sm:w-[400px] w-[390px] relative shadow-xl" onSubmit={handleSubmit(handleSignIn)}>
            <button type="button" className="text-xl font-bold absolute top-2 right-2">
                <Link to={"/"}><i className="bi bi-x-lg"></i></Link>
            </button>
            <div className="text-3xl font-bold">
                Entrar
            </div>
            <div className="flex flex-col gap-4 my-5">
                <input type="email" placeholder="Email" {...register("email")} className="px-2 py-1 border-2 rounded-sm" />
                {errors.email?.message && <p className="text-red-600">{errors.email?.message}</p>}
                <input type="password" placeholder="Senha" {...register("password")} className="px-2 py-1 border-2 rounded-sm" />
                {errors.password?.message && <p className="text-red-600">{errors.password?.message}</p>}
                {
                    loading && (
                        <CustomButton text={"...Entrando"} type={"button"} loading={true} />
                    ) || (
                        <CustomButton text={"ENTRAR"} type={"submit"} />
                    )
                }
            </div>
            <div className="text-center">
                Não tem uma conta? <span className="text-blue-500 font-semibold hover:underline cursor-pointer"><Link to={"/signup"}>Cadastre-se</Link></span>
            </div>
        </form>
    )
}

export default SigninForm