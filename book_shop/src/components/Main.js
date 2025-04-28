import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BookDetails from "./BookDetails";
import CartItems from "./CartItems";
import { booksDetails } from '../BooksData';
import { useStoreActions } from "easy-peasy";
import LikedList from "./LikedList";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

function Main() {

  const setBooksList = useStoreActions((actions) => actions.setBooksList);

  useEffect(() => {
    setBooksList(booksDetails)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book_details" element={<BookDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/liked" element={<LikedList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
