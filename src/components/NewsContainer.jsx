import Card from "./Card"

const NewsContainer = ({posts}) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {posts.map((post) => (
                <Card key={post.id} title={post.title} text={post.text} img={post.banner} comments={post.comments} likes={post.likes} />
            ))}
        </div>
    )
}

export default NewsContainer