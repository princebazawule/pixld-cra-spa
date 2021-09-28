import React, { createContext, useState, useEffect } from "react"

export const WordpressInfoContext = createContext()

const WordpressInfoContextProvider = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const loadPost = async () => {
                const response = await fetch('https://pixldinc.com/wp-json/acf/v3/pages/22?_embed')
    
                if(!response.ok) {
                    console.log(`...not working`)
                    return
                }
                const items = await response.json()
                setItems(items)
            }
    
            loadPost()
        }, 1000)
    }, [])

    // console.log(items)

    return (
        <WordpressInfoContext.Provider value={{ items }}>
            {props.children}
        </WordpressInfoContext.Provider>
    )
}

export default WordpressInfoContextProvider