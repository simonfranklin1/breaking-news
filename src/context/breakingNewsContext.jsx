import { createContext, useContext, useState, useEffect } from "react";
import { getLocalStorage, login } from "../utils/utils";


export const BreakingNewsContext = createContext();

export const BreakingNewsContextProvider = ({ children }) => {
    const [background, setBackground] = useState(false);
    const [form, setForm] = useState("signin");
    const [ token, setToken ] = useState(getLocalStorage("access_token") || null);
    const [ user, setUser ] = useState(null);

    const data = {
        background,
        setBackground,
        form,
        setForm,
        user, 
        setUser
    }

    useEffect(() => {
        if(token) {
            login(token.id, token.token).then(response => setUser(response));
        }
        
    }, [])

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