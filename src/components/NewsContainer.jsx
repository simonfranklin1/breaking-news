import Card from "./Card"

const PostsContainer = ({posts, search = false }) => {
    return (
        <div className={`grid grid-cols-1 gap-4 ${search ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}>
            {posts.map((post) => (
                <Card key={post.id} title={post.title} text={post.text} img={post.banner} comments={post.comments} likes={post.likes} />
            ))}
        </div>
    )
}

export default PostsContainer