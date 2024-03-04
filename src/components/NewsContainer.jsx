import Card from "./Card"

const PostsContainer = ({posts, search = false }) => {
    return (
        <div className={`grid sm:grid-cols-2 grid-cols-1 p-4 lg:p-0 lg:grid-cols-1 gap-4 ${search ? "lg:grid-cols-1" : "lg:grid-cols-2"}`}>
            {posts.map((post) => (
                <Card key={post.id} {...post} top={false} />
            ))}
        </div>
    )
}

export default PostsContainer