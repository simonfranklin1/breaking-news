import { useEffect } from "react"
import { PostForm } from "../components"
import { createPost, getLocalStorage } from "../utils/utils"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePost = () => {
  const isLogged = getLocalStorage("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged.token) {
      navigate("/")
    }
  }, []);

  const handleCreate = (values) => {
    createPost(values)
      .then((response) => {
        toast.success(response.message);
        navigate("/");
      }).catch((error) => console.log(error));
  }

  return (
    <PostForm action={"PUBLICAR"} post={null} title={"Criar Notícia"} handleFunction={handleCreate} />
  )
}

export default CreatePost