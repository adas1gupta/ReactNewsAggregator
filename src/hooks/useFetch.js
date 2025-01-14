import { useState, useEffect } from "react";

function useFetch (url) {
    const [news, setNews] = useState(null)

    useEffect(() => {
        async function fetchNews () {
            const response = await fetch(url)
            const data = await response.json()
            setNews(data)
        }

        fetchNews()
    }, [url])

    return news
}

export default useFetch