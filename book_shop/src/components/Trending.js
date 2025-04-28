import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";
import "../styles/commonStyle.css";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

function Trending() {
  const [showAll, setShowAll] = useState(false);
  const [shuffledBooks, setShuffledBooks] = useState([]);
  const setBook = useStoreActions((actions) => actions.setBook);
  const booksList = useStoreState((state) => state.booksList);

  useEffect(() => {
    const shuffled = [...booksList].sort(() => 0.5 - Math.random());
    setShuffledBooks(shuffled);
  }, []);

  const visibleItems = showAll ? shuffledBooks : shuffledBooks.slice(0, 6);

  return (
    <div className="ml-5 mr-5">
      <div className="flex justify-content-between align-items-center mb-3">
        <h3>Trending Now</h3>
        <span
          className="text-cyan-500 font-bold underline cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All"}
          <i className={`pi pi-angle-${showAll ? "up" : "down"} ml-2`}></i>
        </span>
      </div>
      <div className="grid">
        {visibleItems.map((item) => (
          <div
            key={item.bookId}
            className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2"
          >
            <div className="flex flex-column align-items-center md:align-items-start">
              <Link to="/book_details">
                <img
                  src={item.bookImage}
                  height={300}
                  width={210}
                  className="mb-1 border-round-lg"
                  onClick={() => setBook(item)}
                />
              </Link>
              <span className="text-cyan-500 font-bold mt-1">
                {item.authorName}
              </span>
              <span className="text-lg font-bold mt-1">{item.bookName}</span>
              <Rating value={item.rating} cancel={false} className="mt-1" />
              <span className="mt-1">
                <span className="text-red-500 text-lg font-bold mr-2">
                  ₹{item.originalPrice}
                </span>
                <span className="line-through font-bold">
                  ₹{item.offerPrice}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
