import React from 'react'
import { useBreakingNews } from '../context/breakingNewsContext'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'

const FormWrapper = () => {
  const { form } = useBreakingNews();

  return (
    <div className={`block fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20`}>
      {
        form === "signin" && (
          <SigninForm />
        ) || form === "signup" && (
          <SignupForm />
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