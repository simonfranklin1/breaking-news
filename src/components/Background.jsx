import { useBreakingNews } from '../context/breakingNewsContext'
import FormWrapper from './FormWrapper'

const Background = () => {
    const { background, form, setForm, setBackground } = useBreakingNews()

    return (
        <>
            <div className={`bg-black w-full h-full fixed top-0 left-0 opacity-20 z-20 ${background ? "block" : "hidden"} justify-center items-center`} onClick={() => setBackground(false)} />
            <FormWrapper />
        </>
    )
}

export default Background