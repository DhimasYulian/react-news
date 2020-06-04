import React, { useState, useEffect, createContext } from 'react';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
    let defaultNews = {
        status: 'ok',
        totalResult: 0,
        articles: [],
        heading: ''
    }
    const [news, setNews] = useState(defaultNews);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        getTopNews();
    }, [])

    const getTopNews = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
            const results = await response.json();
            console.log(results);
            setNews(current => {
                return (
                    {
                        ...results,
                        articles: [...current.articles, ...results.articles],
                        status: results.status,
                        totalResult: results.totalResult,
                        heading: "Top Headline News"
                    }
                )
            })
            if (results.status !== 'ok') {
                throw new Error('Error')
            }
        } catch (err) {
            setError(true);
        }
        setLoading(false);
    }

    const newsState = {
        news,
        isLoading,
        isError,
        setNews,
        setLoading,
        setError
    }

    return (
        <NewsContext.Provider value={newsState}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsContext;