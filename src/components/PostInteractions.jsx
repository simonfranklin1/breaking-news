import React, { useEffect, useState } from 'react'

const PostInteractions = ({ handleComment, username, comment, setComment, handleLike, alreadyLiked }) => {

    const focusInput = () => {
        document.getElementById("comment-input").focus()
    }

    return (
        <>
            <div className="flex items-center gap-4 w-full py-5 border-b-2 border-t-2">
                <button className='flex items-center gap-[.2rem]' onClick={handleLike}>
                    {
                        alreadyLiked && (
                            <>
                                <i className="bi bi-hand-thumbs-up-fill"></i>
                                <span>Gostei</span>
                            </>
                        ) || (
                            <>
                                <i className="bi bi-hand-thumbs-up"></i>
                                <span>Gostei</span>
                            </>
                        )
                    }
                </button>
                <button className='flex items-center gap-[.2rem]' onClick={focusInput}>
                    <i className="bi bi-chat"></i>
                    <span>Comentar</span>
                </button>
            </div>
            <form className='flex w-full py-5' onSubmit={handleComment}>
                <input type="text" id='comment-input' placeholder={"Adicione um comentário como " + username} value={comment} onChange={(e) => setComment(e.target.value)} className="outline-none p-[0.6rem] bg-[#f5f5f5] border-[transparent] w-full rounded-full focus:border-[#0bade3] border-[1px] focus:border-solid" />
            </form>
        </>
    )
}

export default PostInteractions