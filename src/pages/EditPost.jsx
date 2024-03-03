import React, { useEffect, useState } from 'react'
import { getPostById, getLocalStorage } from '../utils/utils';
import { Loading } from '../components';
import PostForm from '../components';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const isLogged = getLocalStorage("access_token");
    const navigate = useNavigate();

    useEffect(() => {
        if(isLogged.token) {
            getPostById(id, isLogged.token).then(response => setPost(response.news));
        } else {
            navigate("/")
        }
    }, [id])

    const handleEdit = (values) => {
        console.log(values)
    }

    return (
        <>
            {post && (
                <PostForm post={post} action={handleEdit} />
            ) || (
                    <Loading />
                )}
        </>
    )
}

export default EditPost