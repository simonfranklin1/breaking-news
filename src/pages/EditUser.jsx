import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editUser, getUser, getLocalStorage } from "../utils/utils"
import UserForm from "../components/UserForm";
import { Loading } from "../components";
import { toast } from "react-toastify";

const EditUser = () => {
  const { id } = useParams();
  const [ userData, setUserData ] = useState();
  const isLogged = getLocalStorage("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if(isLogged.token) {
      getUser(id).then(response => setUserData(response));
    } else {
      navigate("/");
    }
  }, [id])

  const handleEdit = (values) => {
    editUser(id, values).then((response) => {
      toast.success(response.message);
      navigate("/profile/" + id);
    })
  }

  return (
    <>
      {
        userData && (
          <UserForm title={"Editar Usuário"} action={"ATUALIZAR"} user={userData} handleFunction={handleEdit} />
        ) || (
          <Loading />
        )
      }
    </>
  )
}

export default EditUser