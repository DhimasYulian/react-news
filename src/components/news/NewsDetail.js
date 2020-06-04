import React from 'react';
import { Link } from 'react-router-dom';

const NewsDetail = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-10 mx-auto">
                        <img src="https://source.unsplash.com/random" height="450px" width="100%" alt="" />
                        <h2>News Title</h2>
                        <h6>News Description</h6>
                        <p className="text-muted">by John Doe</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi maiores, saepe dolorem veniam laudantium soluta fugit officiis, sapiente dolore impedit tempora ex harum rerum!</p>
                        <Link to="/" className="btn btn-dark">Back to Home</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NewsDetail;
