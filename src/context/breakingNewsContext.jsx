import { createContext, useContext, useState, useEffect } from "react";
import { getLocalStorage, getUser } from "../utils/utils";


export const BreakingNewsContext = createContext();

export const BreakingNewsContextProvider = ({ children }) => {
    const [ background, setBackground ] = useState(false);
    const [ form, setForm ] = useState("signin");
    const [ user, setUser ] = useState(null);
    const [ warning, setWarning ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const data = {
        background,
        setBackground,
        form,
        setForm,
        user, 
        setUser,
        warning, 
        setWarning,
        loading, 
        setLoading
    }

    useEffect(() => {
        const isLogged = getLocalStorage("access_token");

        if(isLogged) {
            getUser(isLogged.id, isLogged.token).then(response => setUser(response));
        } else {
            setUser(null);
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