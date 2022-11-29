import { useState } from "react";
import { createContext } from "react";

export const dataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [account, setAccount] = useState('')


    return (
        <dataContext.Provider value={{ account, setAccount }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider;