import { Outlet } from 'react-router-dom'

const Authentication = () => {

    return (
        <>
            <div className={`bg-[#F1F1F1] w-[100vw] h-[100vh] flex justify-center items-center`}>
                <Outlet />
            </div>
        </>
    )
}

export default Authentication