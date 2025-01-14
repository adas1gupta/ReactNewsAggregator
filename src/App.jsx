import React from "react";
import { createRoot } from "react-dom/client";
import useFetch from "./hooks/useFetch";
import { useState } from "react";

function App () {
    const categories = ["general", "technology", "sports", "business", "health","entertainment","science"]
    const apiKey = import.meta.env.VITE_REACT_API_KEY;
    const [category, setCategory] = useState('general')
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`
    const data = useFetch(url)

    return (
        <div>
            {categories.map((category, index) => (
                <button onClick={() => setCategory(category)} key={index}>{category}</button>
            ))}
            {(data) && (
                <div>
                <ul>
                    {data.articles.map((article, index) => (
                        <li key={index} style={{ marginBottom: "20px", listStyle: "none", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                            <h2>{article.title}</h2>
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginBottom: "10px" }}
                                />
                            )}
                            <p>{article.description}</p>
                            <small>Source: {article.source?.name || "Unknown"}</small>
                            <br />
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Read Full Article
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)