import React from "react";

function NewsItem(props) {
  let { title, description, urlImage, newsUrl, author, publishedAt, source } = props
  return (
    <>
      <div className="card">
        <img src={urlImage} className="card-img-top" alt="..." />

        <h6 className="my-2 mx-2">
          <span className="badge bg-secondary">{source}</span>
        </h6>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}</p>

          <p className="card-text">
            <small className="text-muted"> By {author ? author : "Unknown"} {new Date(publishedAt).toGMTString()}</small>
          </p>

          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark" >
            Read More
          </a>

        </div>
      </div>
    </>
  );
}

export default NewsItem;
