import React, { createContext, useState, useEffect } from 'react'

export const WordpressWorkContext = createContext()

const WordpressWorkContextProvider = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const loadPost = async () => {
                const response = await fetch('https://pixldinc.com/wp-json/acf/v3/work?page=1&per_page=6')

                if(!response.ok) {
                    console.log(`...no posts`)
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
        <WordpressWorkContext.Provider value={{ posts }}>
            {props.children}
        </WordpressWorkContext.Provider>
    )
}

export default WordpressWorkContextProvider
