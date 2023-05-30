import { createContext, useState } from 'react'

export const web3Context = createContext()

export const Web3ContextProvider = ({ children }) => {
    // SI EL USUARIO ESTA LOGUEADO O NO
    const [login3, setLogin3] = useState(false)

    return (
        <web3Context.Provider value={{
            login3,
            setLogin3
        }}>
            {children}
        </web3Context.Provider>
    )
}

