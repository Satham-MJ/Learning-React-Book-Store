import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  let amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
  if (thumbnail !== undefined && amount !== undefined) {
    return (
      <>
        <div
          className="card"
          onClick={() => {
            setShow(true);
            setBookItem(book);
          }}
        >
          <img src={thumbnail} alt="" />
          <div className="bottom">
            <h3 className="title">{book.volumeInfo.title}</h3>
            <p className="amount">&#8377;{amount}</p>
          </div>
        </div>
        <Modal show={show} item={bookItem} setShow={setShow} />
      </>
    );
  }
};

export default Card;
