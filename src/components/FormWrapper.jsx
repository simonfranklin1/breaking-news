import React from 'react'
import { useBreakingNews } from '../context/breakingNewsContext'

const FormWrapper = () => {
    const { background, form, setForm, setBackground } = useBreakingNews()

  return (
    <div className={`bg-black w-full h-full fixed top-0 left-0 opacity-20 z-20 ${ background ? "flex" : "hidden" } justify-center items-center`}>
        <div className="absolute top-2 right-2 text-white text-3xl" onClick={() => setBackground(false)}>
          x
        </div>
        <div className="text-white text-2xl font-bold">
           { 
           form === "signin" && (
                "Sign In"
           ) || form === "signup" && (
             "Sign Up"
           ) || form === "create" && (
             "Create Post"
           )
           } 
        </div>
    </div>
  )
}

export default FormWrapper