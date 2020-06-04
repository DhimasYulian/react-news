import React, { useContext } from 'react';
import NewsCard from './NewsCard'
import { NewsContext } from '../../NewsContext';

const News = () => {

    const { news, isLoading, isError } = useContext(NewsContext);

    if (!isLoading) {
        if (isError) {
            return <h2 className="text-center mt-5">Something went wrong</h2>
        } else {
            return (
                <React.Fragment>
                    <div className="container">
                        <h3 className="mt-4">{news.heading}</h3>
                        <div className="row mt-3">
                            {news.articles.map((item, index) => (
                                <NewsCard key={index} id={index} title={item.title} img={item.urlToImage} desc={item.description} />
                            ))}
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    } else {
        return <h2 className="text-center mt-5">Loading...</h2>
    }

}

export default News;
