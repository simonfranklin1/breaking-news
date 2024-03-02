import { createContext, useContext, useState } from "react";


export const BreakingNewsContext = createContext();

export const BreakingNewsContextProvider = ({ children }) => {
    const [background, setBackground] = useState(false);
    const [form, setForm] = useState("signin");

    const data = {
        background,
        setBackground,
        form,
        setForm,
    }

    return (
        <BreakingNewsContext.Provider value={data}>
            {children}
        </BreakingNewsContext.Provider>
    )
}

export const useBreakingNews = () => {
    const context = useContext(BreakingNewsContext);

    if(!context) {
        throw new Error("Use a context inside a provider")
    }

    return context
}