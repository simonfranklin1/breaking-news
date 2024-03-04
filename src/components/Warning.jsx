import CustomButton from "./CustomButton"
import {useNavigate, useParams} from "react-router-dom"
import { deletePost, getLocalStorage } from "../utils/utils"
import { useBreakingNews } from "../context/breakingNewsContext"

const Warning = () => {
    const  { warning, setWarning }  = useBreakingNews();
    const navigate = useNavigate();
    const {id} = useParams();
    const isLogged = getLocalStorage("access_token");
    
    const handleDelete = async(id) => {
        const response = await deletePost(id, isLogged.token);
    
        if(response) {
          navigate("/");
          setWarning("");
        }
    }

    return (
        <>
            <div className={`bg-black fixed top-0 left-0 w-full h-full z-50 opacity-30 ${ warning === "" ? "hidden" : ""}`}></div>
            <div className={`bg-white flex flex-col gap-8 p-8 rounded-md sm:w-[400px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl z-50 ${ warning === "" ? "hidden" : ""}`}>
                {
                    warning === "Login" && (
                        <>
                            <div className="text-3xl font-bold">
                                Faça Login para ver os detalhes da notícia
                            </div>
                            <CustomButton text={"LOGIN"} type={"button"} handleClick={() => { navigate("/signin"), setWarning("")}} />
                        </>
                    ) || warning === "Delete" && (
                        <>
                            <div className="text-5xl text-center text-red-500 font-semibold">
                                <i className="bi bi-x-circle"></i>
                            </div>
                            <div className="text-3xl font-bold">
                                Tem certeza que quer deletar a notícia?
                            </div>
                            <div className="flex justify-end gap-4">
                                <CustomButton text={"Sim"} type={"button"} handleClick={() => handleDelete(id)} />
                                <button className="text-white bg-slate-400 border-none outline-none text-[1rem] rounded-md font-medium py-2 px-4 uppercase ease-in-out duration-[0.4s] hover:bg-slate-600" onClick={() => {setWarning("")}}>
                                    NÃO
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Warning