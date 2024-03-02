import { useState, useEffect } from "react";
import { getAllPosts, getTopNews } from "../utils/utils";
import HomeHeader from "../components/HomeHeader";
import PostsContainer from "../components/NewsContainer";


const Home = () => {
  const [posts, setPosts] = useState(null);

  const [topNews, setTopNews] = useState(null);

  useEffect(() => {
    getAllPosts().then(response => setPosts(response));
    getTopNews().then(response => setTopNews(response.news));

  }, [])

  return (
    <div>
      {
        posts && topNews && (
          <>
            <HomeHeader news={topNews} />
            <PostsContainer posts={posts.results} />
          </>
        ) || (
          <div className="text-xl w-full text-center">...Carregando</div>
        )
      }
    </div>
  )
}

export default Home