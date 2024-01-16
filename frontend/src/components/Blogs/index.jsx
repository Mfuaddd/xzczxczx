import React, { useEffect, useState } from "react";
import "./index.scss";

function Blogs() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    setApiData(data);
  };

  console.log(apiData);

  return (
    <div className="blogs">
      <div className="container blogs__wrapper">
        <div className="blogs__cards">
          {apiData &&
            apiData.map((item) => (
              <div className="blog-card">
                <div className="blog-card__title">{item.title}</div>
                <div className="blog-card__info">
                  <div className="blog-card__data">
                    <i className="blog-card__icon fa-regular fa-calendar-days"></i>
                    {new Date(item.updatedAt).toDateString()}
                  </div>
                  <div className="blog-card__category">
                    <i className="blog-card__icon fa-regular fa-folder-open"></i>
                    {item.category}
                  </div>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="blog-card__text">
                    <div className="blog-card__button">Continue Reading</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="blogs__aside"></div>
      </div>
    </div>
  );
}

export default Blogs;
