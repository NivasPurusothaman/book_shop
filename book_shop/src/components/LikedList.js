import React from "react";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import LikedBooksCard from "./LikedBooksCard";
import TopBar from "./TopBar";

function LikedList() {
  const likedItems = useStoreState((state) => state.likedItems);
  const setLikedItems = useStoreActions((actions) => actions.setLikedItems);

  const handleRemoveCart = () => {
    const newLikedItems = [];
    setLikedItems(newLikedItems);
  };

  return (
    <div>
      <TopBar />
      <div className="m-3">
        {likedItems.length > 0 && (
          <div className="flex justify-content-end mt-3">
            <span
              className="flex align-items-center backBtn cursor-pointer"
              onClick={handleRemoveCart}
            >
              Remove All
              <i className="pi pi-angle-double-right ml-2"></i>
            </span>
          </div>
        )}
        <LikedBooksCard />
      </div>
    </div>
  );
}

export default LikedList;
