import React, { createContext, useState, useEffect } from "react"

export const WordpressClientContext = createContext()

const WordpressClientContextProvider = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const loadPost = async () => {
                const response = await fetch('https://pixldinc.com/wp-json/acf/v3/clients?page=1&per_page=20')

                if(!response.ok) {
                    console.log(`...not working`)
                    return
                }
                const posts = await response.json()
                setPosts(posts)
            }

            loadPost()
        }, 1000)
    }, [])

    // console.log(posts)

    return (
        <WordpressClientContext.Provider value={{ posts }}>
            {props.children}
        </WordpressClientContext.Provider>
    )
}

export default WordpressClientContextProvider