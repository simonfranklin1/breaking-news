import Card from "./Card"

const HomeHeader = ({news}) => {
  return (
    <div className='w-full mb-4'>
        <Card {...news} top={true} />
    </div>
  )
}

export default HomeHeader