import React from 'react'
import { useBreakingNews } from '../context/breakingNewsContext'

const FormWrapper = () => {
    const { form, background, setBackground, setForm } = useBreakingNews()

  return (
    <div className={`bg-black w-full h-full fixed top-0 left-0 opacity-20 ${ background ? "flex" : "none" } justify-center items-center`}>
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