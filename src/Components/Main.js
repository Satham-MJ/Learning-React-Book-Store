import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const serachBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDV8kB9jU22sBdzDqU6RZkbKgJPqVVZl4I&maxResults=40"
        )
        .then((res) => setBooks(res.data.items));
    }
  };
  return (
    <div>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={serachBook}
            />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">
        {books.map((item, i) => {
          return <Card book={item} />;
        })}
      </div>
    </div>
  );
};

export default Main;
