import { useState, useEffect } from "react";
import { Card } from "../components";
import { getAllPosts, getTopNews } from "../utils/utils";
import HomeHeader from "../components/HomeHeader";


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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {posts.results.map((post) => (
                <Card key={post.id} title={post.title} text={post.text} img={post.banner} comments={post.comments} likes={post.likes} />
              ))}
            </div>
          </>
        ) || (
          <div className="text-lg w-full">...Loading</div>
        )
      }
    </div>
  )
}

export default Home