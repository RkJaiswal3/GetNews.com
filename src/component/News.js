// import PropTypes from 'prop-types'
import React, { useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = `${capitalizeLetter(
  //   props.category
  // )} - GetNews.com`;
  const capitalizeLetter= (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.myApiKEY}&page=${page}&pageSize=${props.pageSize}`;
    //setLoading(true);
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
  
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, []);

  // const andleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };
  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.myApiKEY}&page=${nextPage}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };


    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          Top Headlines From {capitalizeLetter(props.category)}
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      source={element.source.name}
                      title={element.title ? element.title.slice(0, 40) : ""}
                      author={!element.author ? "Unknown" : element.author}
                      date={element.publishedAt}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
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

News.defaultPropTypes = {
  country: "in",
  pageSize: 6,
  category: "business",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  myApiKEY: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
  
};

export default News;
