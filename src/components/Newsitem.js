import React, { Component } from 'react';

export default class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-dark btn-sm">Read more</a>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'unknown'} on {new Date(date).toGMTString()}</small></p>
                    </div>

                </div>

            </div>
        )
    }
}