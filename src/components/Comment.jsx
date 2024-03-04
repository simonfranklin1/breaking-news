import React from 'react'

const CommentContainer = ({ comment, user, handleDeleteComment }) => {
    return (
        <div className="flex items-start gap-4">
            <img src={comment.avatar} alt={comment.username} className='w-12 h-12 rounded-full' />
            <div className='flex flex-col  bg-slate-200 rounded-lg px-8 py-2 gap-4 relative'>
                <div className="text-lg font-bold">
                    {comment.username}
                </div>
                {comment.comment}
                <button className={`absolute top-[10px] right-[5px] text-lg ${comment.userId !== user.id ? "hidden" : ""}`} onClick={() => handleDeleteComment(comment.idComment)}>
                    <i className="bi bi-trash3"></i>
                </button>
            </div>
        </div>
    )
}

export default CommentContainer