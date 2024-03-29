import { Link } from "react-router-dom"

const CommentContainer = ({ comment, user, handleDeleteComment }) => {
    return (
        <div className="flex items-start gap-4 max-w-[95%]">
            <Link to={"/profile/" + comment.userId}>
                <img src={comment.avatar} alt={comment.username} className="w-12 h-12 rounded-full object-cover" />
            </Link>
            <div className="flex flex-col  bg-slate-200 rounded-lg px-5 py-2 gap-4 relative">
                <div className="text-lg font-bold">
                    {comment.username}
                </div>
                {comment.comment}
                <button className={`absolute top-[8px] right-[-22px] duration-200 hover:scale-105 hover:text-red-500 text-lg ${comment.userId !== user.id ? "hidden" : ""}`} onClick={() => handleDeleteComment(comment.idComment)}>
                    <i className="bi bi-trash3"></i>
                </button>
            </div>
        </div>
    )
}

export default CommentContainer