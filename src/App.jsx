import { Route, Routes } from "react-router-dom"
import { Home, Search, Authentication, SigninForm, SignupForm, News, ProfilePage, NewsPage, EditPost, EditUser, CreatePost } from "./pages"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <div className="font-news">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes >
        <Route element={<News />}>
          <Route index path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/news/:id" element={<NewsPage />} />
        </Route>

        <Route element={<Authentication />} >
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/editPost/:id" element={<EditPost />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
