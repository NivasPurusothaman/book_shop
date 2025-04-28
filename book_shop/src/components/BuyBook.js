import React, { useRef } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Rating } from "primereact/rating";
import "../styles/commonStyle.css";
import { Toast } from "primereact/toast";

function BuyBook() {
  const toast = useRef(null);

  const book = useStoreState((state) => state.book);
  const cartItems = useStoreState((state) => state.cartItems);
  const setCartItems = useStoreActions((actions) => actions.setCartItems);
  const likedItems = useStoreState((state) => state.likedItems);
  const setLikedItems = useStoreActions((actions) => actions.setLikedItems);

  const successToast = (text) => {
    toast.current.show({severity:'success', summary: 'Success', detail:text, life: 2000});
  };

  const handleLike = (book) => {
    successToast(`${book.bookName} added to Liked Books!`)
    const likedBooks = [...likedItems, book];
    const uniqueBooks = likedBooks.filter(
      (book, index, self) =>
        index === self.findIndex((b) => b.bookId === book.bookId)
    );
    setLikedItems(uniqueBooks);
  };

  const handleAddCart = (book) => {
    successToast(`${book.bookName} added to Cart!`)
    const addedBooks = [...cartItems, book];
    const uniqueBooks = addedBooks.filter(
      (book, index, self) =>
        index === self.findIndex((b) => b.bookId === book.bookId)
    );
    setCartItems(uniqueBooks);
  };

  return (
    <div>
      <Toast ref={toast} />
      <div className="flex flex-column md:flex-row mt-3">
        <img
          src={book.bookImage}
          height={500}
          width={350}
          className="border-round-lg mr-3"
        />
        <div className="flex flex-column mt-3 md:mt-0">
          <div className="flex justify-content-between">
            <div className="flex flex-column">
              <span className="text-cyan-500 font-bold">{book.authorName}</span>
              <span className="text-lg font-bold mt-2">{book.bookName}</span>
            </div>
            <span
              className="likeBtn cursor-pointer"
              onClick={() => handleLike(book)}
            >
              <i className="pi pi-thumbs-up-fill"></i>
            </span>
          </div>
          <Rating value={book.rating} cancel={false} className="mt-2" />
          <span className="mt-2">{book.about}</span>
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
              <span>{book.publisher}</span>
              <span>{book.publishDate}</span>
              <span>{book.weight}</span>
              <span>{book.country}</span>
              <span>{book.language}</span>
              <span>{book.category}</span>
            </div>
          </div>
          <span className="mt-2">
            <span className="text-red-500 text-lg font-bold mr-2">
              ₹{book.originalPrice}
            </span>
            <span className="line-through font-bold">₹{book.offerPrice}</span>
          </span>
          <div className="flex mt-2">
            <span className="flex align-items-center buyNowBtn mr-3">
              Buy Now
              <i className="pi pi-angle-double-right ml-2"></i>
            </span>
            <span
              className="flex align-items-center addCartBtn cursor-pointer"
              onClick={() => handleAddCart(book)}
            >
              Add to Cart
              <i className="pi pi-shopping-cart ml-2"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyBook;
