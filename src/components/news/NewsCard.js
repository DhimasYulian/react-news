import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ id, title, img, desc }) => {
    return (
        <div className="col-md-4">
            <div className="card mt-2">
                <img src={img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <Link to={`/detail/${id}`} className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>

    )
}

export default NewsCard
