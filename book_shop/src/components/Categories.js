import React, { useState } from "react";
import { categories } from "../BooksData";
import { Rating } from "primereact/rating";
import "../styles/commonStyle.css";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";

function Categories() {

  const [showAll, setShowAll] = useState(false);
  const [categoryItems, setCategoryItems] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const setBook = useStoreActions((actions) => actions.setBook);
  const booksList = useStoreState((state) => state.booksList);

  const visibleItems = showAll ? categories : categories.slice(0, 6);

  const showCategoryItems = (categoryType) => {
    const categoryBooks = booksList.filter(
      (item) => item.category === categoryType
    );
    setCategoryItems(categoryBooks);
  };

  return (
    <div className="ml-5 mr-5 mb-3">
      <div className="flex justify-content-between align-items-center">
        <h3>Categories</h3>
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
            key={item.id}
            className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2 cursor-pointer"
            onClick={() => {showCategoryItems(item.categoryType); setCategoryName(item.categoryType);}}
          >
            <div className="flex flex-column align-items-center">
              <span className="text-cyan-500 font-bold mb-2">
                {item.categoryType}
              </span>
              <img src={item.categoryImage} height={180} width={210} className="border-round-lg" />
            </div>
          </div>
        ))}
      </div>
      {categoryItems.length > 0 && (
        <div>
        <h3 className="mt-3 mb-4 text-center md:text-left">{categoryName} Books</h3>
        <div className="grid">
          {categoryItems.map((item) => (
            <div key={item.id} className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2">
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
      )}
    </div>
  );
}

export default Categories;
