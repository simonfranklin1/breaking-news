import React, { useEffect, useState } from 'react'
import { getPostById, getLocalStorage, updatePost } from '../utils/utils';
import { Loading, PostForm } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const isLogged = getLocalStorage("access_token");
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged.token) {
            getPostById(id, isLogged.token).then(response => setPost(response.news));
        } else {
            navigate("/");
        }
    }, [id])

    const handleEdit = (values) => {
        updatePost(id, isLogged.token, values).then((response) => {
            toast.success(response.message)
            navigate("/news/" + id)
        });
    }

    return (
        <>
            {
                post && (
                    <PostForm post={post} action={"ATUALIZAR"} handleFunction={handleEdit} title={"Editar Notícia"} />
                ) || (
                    <Loading />
                )
            }
        </>
    )
}

export default EditPost