import { useState, useEffect } from "react";
import { Card } from "../components";
import { getAllPosts } from "../utils/utils";


const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getAllPosts().then(response => console.log(response))
  }, [])

  return (
    <>
      <h1 className="mb-4">Breaking News</h1>
      <div className="grid grid-cols-2 gap-4 gap-y-[10px]">
        {
          posts && (
            posts.map((post) => (
              <Card key={post.id} title={post.title} text={post.text} img={post.banner} comments={post.comments} likes={post.likes} />
            ))
          ) || (
            <div className="text-lg">...Loading</div>
          )
        }
      </div>
    </>
  )
}

export default Home