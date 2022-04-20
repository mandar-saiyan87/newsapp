import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const today = new Date().toLocaleDateString("en-CA")
  // console.log(today);
  // document.title = `Blockchain Hub - ${props.query
  //   .charAt(0)
  //   .toUpperCase()}${props.query.slice(1)}`;




  async function updateNews() {
    document.title = `Blockchain Hub - ${props.query.charAt(0).toUpperCase()}${props.query.slice(1)}`;
    props.setProgress(0);
    setLoading(true);
    let url = `https://newsapi.org/v2/everything?q=${props.query}&from=${today}&sortBy=publishedAt&language=en&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    props.setProgress(10);

    let data = await fetch(url);
    props.setProgress(30);

    let newsData = await data.json();
    props.setProgress(70);

    setLoading(false)
    setArticle(newsData.articles)
    setTotalResults(newsData.totalResults)

    // console.log(newsData);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [props.query]);


  const fetchMoreData = async () => {

    let url = `https://newsapi.org/v2/everything?q=${props.query}&from=${today}}&sortBy=publishedAt&language=en&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let newsData = await data.json();

    // console.log(newsData);
    setArticle(article.concat(newsData.articles))
    setTotalResults(newsData.totalResults)

  };

  return (
    <>
      <h2 className="text-center" style={{ marginTop: "85px", marginBottom: "25px" }}>
        {`${props.query.charAt(0).toUpperCase()}${props.query.slice(1)} - Latest News`}
      </h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="container">
          <div className="row">
            {article.map((elem) => {
              return (
                <div className="col-md-4 my-4" key={elem.url}>
                  <NewsItem title={elem.title} description={elem.description}
                    urlImage={elem.urlToImage ? elem.urlToImage : "https://salautomotive.in/wp-content/uploads/2017/01/no-image-available.jpg"}
                    newsUrl={elem.url} author={elem.author} publishedAt={elem.publishedAt} source={elem.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.callerdefaultProps = {
  query: "blockchain",
  pageSize: 20,
};

News.propTypes = {
  query: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;


