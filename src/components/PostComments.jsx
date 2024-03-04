import CommentContainer from '../components/Comment';

const PostComments = ({ comments, user, handleDeleteComment }) => {

    return (
        <>
            {
                comments.map((comment) => (
                    <CommentContainer key={comment.idComment} comment={comment} user={user} handleDeleteComment={handleDeleteComment} />
                ))
            }
        </>
    )
}

export default PostComments