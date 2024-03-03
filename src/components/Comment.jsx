import React from 'react'

const CommentContainer = ({ comment }) => {
    return (
        <div className="flex items-start gap-4">
            <img src={comment.avatar} alt={comment.username} className='w-12 h-12 rounded-full' />
            <div className='flex flex-col bg-slate-200 rounded-lg px-4 py-2 gap-4'>
                <div className="text-lg font-bold">
                    {comment.username}
                </div>
                {comment.comment}
            </div>
        </div>
    )
}

export default CommentContainer