import { Route, Routes } from "react-router-dom"
import { Home, Search, Authentication, SigninForm, SignupForm, News, ProfilePage, NewsPage, EditPost, EditUser } from "./pages"

function App() {

  return (
    <div>
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
          </Route>

        </Routes>
    </div>
  )
}

export default App
