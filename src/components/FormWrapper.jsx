import React from 'react'
import { useBreakingNews } from '../context/breakingNewsContext'
import SigninForm from './SigninForm'

const FormWrapper = () => {
  const { background, form, setForm, setBackground } = useBreakingNews()

  return (
    <div className={`${background ? "block" : "hidden"} fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20`}>
      {
        form === "signin" && (
          <SigninForm />
        ) || form === "signup" && (
          "Sign Up"
        ) || form === "createpost" && (
          "Create Post"
        ) || form === "editpost" && (
          "Edit Post"
        ) || form === "deletepost" && (
          "Delete Post"
        ) 
      }
    </div>
  )
}

export default FormWrapper