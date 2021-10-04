import React, { createContext, useState, useEffect } from "react"

export const WordpressClientContext = createContext()

const WordpressClientContextProvider = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const loadPost = async () => {
                const response = await fetch('https://pixldinc.link/pixldcms/wp-json/acf/v3/clients?page=1&per_page=15')

                if(!response.ok) {
                    console.log(`...not working`)
                    return
                }
                const posts = await response.json()
                setPosts(posts)
            }

            loadPost()
        }, 0)
    }, [])

    // console.log(posts)

    return (
        <WordpressClientContext.Provider value={{ posts }}>
            {props.children}
        </WordpressClientContext.Provider>
    )
}

export default WordpressClientContextProvider