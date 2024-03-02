import { createContext, useContext, useState } from "react";

export const breakingNewsContext = createContext();

export const breakingNewsContextProvider = ({ children }) => {
    const [background, setBackground] = useState(false);
    const [form, setForm] = useState("signin");

    const data = {
        background,
        setBackground,
        form,
        setForm
    }

    return (
        <breakingNewsContext.Provider value={data}>
            {children}
        </breakingNewsContext.Provider>
    )
}

export const useBreakingNews = () => {
    const context = useContext(breakingNewsContext);
    if (!context) {
        throw new Error(`Context need to be used inside a provider`)
    }

    return context;
}