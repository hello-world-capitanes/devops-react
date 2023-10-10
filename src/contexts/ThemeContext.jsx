import {createContext, useState} from "react"

const ThemeContext = createContext({
    theme: "day",
    changeTheme: () => {}
})

export {ThemeContext}

function ThemeContextProvider({children}){
    const [theme, setTheme] = useState("day")

    const changeTheme =() => {
        if(theme==="day") {
            setTheme("night")
        }else{
            setTheme("day")
        }
    }

    const contextValue = {
        theme:theme,
        changeTheme: changeTheme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
          {children}
        </ThemeContext.Provider>
      )
}

export {ThemeContextProvider}