import Card from "./Card"

const HomeHeader = ({news}) => {
  return (
    <div className='w-full mb-4'>
        <Card title={news.title} text={news.text} img={news.banner} comments={news.comments} likes={news.likes} top={true} />
    </div>
  )
}

export default HomeHeader