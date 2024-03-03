import { useEffect, useState } from 'react';
import CommentContainer from '../components/Comment';

const PostComments = ({ comments }) => {

    return (
        <>
            {
                comments.map((comment) => (
                    <CommentContainer key={comment.idComment} comment={comment} />
                ))
            }
        </>
    )
}

export default PostComments