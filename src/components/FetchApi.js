import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const FetchApi = ({cat}) => {
  const [data, setData] = useState("");
  const FetchData = async () => {
    await axios
      .get(
        cat ? 
        `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=e8ffe186216c41d59dcf0437425c0355`
         : 
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=e8ffe186216c41d59dcf0437425c0355"
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    FetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h3 className="uppercase">Top {cat} News</h3>
      <hr />
      <div className="d-flex flex-wrap justify-content-center align-items-center my-4 api-box">
        {data
          ? data.map((items, index) => (
              <div className="api-card mx-4 my-2" key={index}>
                <h5 className="mb-3">{items.title}</h5>
                <div className="d-flex flex-wrap">
                  <div className="w-100">
                    <img
                      src={items.urlToImage}
                      alt="image not found"
                      className="img-fluid image"
                    />
                </div>

                  <div className="w-100 pl-3 py-3">
                    <p className="justify">{items.content}</p>
                    <a
                      href={items.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
              </div>
            ))
          : "Error: Please Refresh Page"}
      </div>
    </div>
  );
};

export default FetchApi;
