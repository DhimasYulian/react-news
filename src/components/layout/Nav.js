import React, { useState, useEffect, useContext } from 'react'
import { NewsContext } from '../../NewsContext';

const Nav = () => {

    const { setNews, setLoading, setError } = useContext(NewsContext);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (query !== '') {
            getNews()
        }
    }, [query])

    const getNews = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
            const results = await response.json();
            // console.log(results);
            setNews({ ...results, heading: "Search Result" });
            if (results.status !== 'ok') {
                throw new Error('Error')
            }
        } catch (err) {
            setError(true);
        }
        setLoading(false);
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand">React News</a>
                    <form className="form-inline" onSubmit={getSearch}>
                        <input type="text" className="form-control mr-2" placeholder="Search News..." aria-label="Search" value={search} onChange={updateSearch} />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )
}

export default Nav;
