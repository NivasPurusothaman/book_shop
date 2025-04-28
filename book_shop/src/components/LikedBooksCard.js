import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Rating } from "primereact/rating";
import "../styles/commonStyle.css";

function LikedBooksCard() {
  const likedItems = useStoreState((state) => state.likedItems);
  const setLikedItems = useStoreActions((actions) => actions.setLikedItems);

  const handleRemoveCart = (id) => {
    const newLikedItems = likedItems.filter((item) => item.bookId !== id);
    setLikedItems(newLikedItems);
  };

  return (
    <div className="flex flex-column mt-3">
      {likedItems.length > 0 ? (
        likedItems.map((item) => (
          <div key={item.bookId} className="flex flex-column md:flex-row mb-3">
            <img
              src={item.bookImage}
              height={500}
              width={300}
              className="border-round-lg mr-3"
            />
            <div className="flex flex-column mt-3 md:mt-0">
              <span className="text-cyan-500 font-bold">{item.authorName}</span>
              <span className="text-lg font-bold mt-2">{item.bookName}</span>
              <Rating value={item.rating} cancel={false} className="mt-2" />
              <span className="mt-2">{item.about}</span>
              <div className="flex mt-2">
                <div className="flex flex-column font-bold mr-3">
                  <span>Publisher :</span>
                  <span>Date of Publish :</span>
                  <span>Item Weight :</span>
                  <span>Country of Origin :</span>
                  <span>Language :</span>
                  <span>Category :</span>
                </div>
                <div className="flex flex-column">
                  <span>{item.publisher}</span>
                  <span>{item.publishDate}</span>
                  <span>{item.weight}</span>
                  <span>{item.country}</span>
                  <span>{item.language}</span>
                  <span>{item.category}</span>
                </div>
              </div>
              <span className="mt-2">
                <span className="text-red-500 text-lg font-bold mr-2">
                  ₹{item.originalPrice}
                </span>
                <span className="line-through font-bold">
                  ₹{item.offerPrice}
                </span>
              </span>
              <div className="flex mt-2">
                <span
                  className="flex align-items-center addCartBtn cursor-pointer"
                  onClick={() => handleRemoveCart(item.bookId)}
                >
                  Remove
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>Oops!.. You don't like any book...</h2>
      )}
    </div>
  );
}

export default LikedBooksCard;
