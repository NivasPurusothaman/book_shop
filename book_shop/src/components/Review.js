import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Rating } from "primereact/rating";
import "../styles/commonStyle.css";

function Review() {
  const rating = [1, 2, 3, 4, 5];
  const [name, setName] = useState("");
  const [mailId, setMailId] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [showError, setShowError] = useState(false);
  const [selectedBookReview, setSelectedBookReview] = useState([]);
  const reviews = useStoreState((state) => state.reviews);
  const setReviews = useStoreActions((actions) => actions.setReviews);
  const book = useStoreState((state) => state.book);

  useEffect(() => {
    const selectedReview = reviews.filter((item) => item.id === book.bookId)
    setSelectedBookReview(selectedReview)
  }, [reviews, book])

  const handleSubmit = () => {
    if (name && mailId && ratingValue && reviewText) {
      const payload = {
        id: book.bookId,
        name: name,
        mailId: mailId,
        ratingValue: ratingValue,
        reviewText: reviewText,
      };
      setReviews([...reviews, payload]);
      setShowError(false);
      setName("");
      setMailId("");
      setRatingValue("");
      setReviewText("");
    } else {
      setShowError(true);
    }
  };

  return (
    <div>
      <div>
        {setSelectedBookReview.length > 0 && selectedBookReview.map((item, index) => 
            <div key={index} className="flex flex-column mb-5">
                <span className='text-lg text-cyan-500 font-bold'>{item.name}</span>
                <span className='mt-1'>{item.reviewText}</span>
                <Rating value={item.ratingValue} cancel={false} className='mt-2' />
            </div>
        )}
      </div>
      <div>
        <h5 className="text-center font-bold">Write a Review</h5>
        <div className="flex flex-column md:flex-row mt-4">
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            className="flex-1 mr-0 md:mr-2 mb-3 md:mb-0"
          />
          <InputText
            value={mailId}
            onChange={(e) => setMailId(e.target.value)}
            placeholder="Enter your Mail-Id"
            className="flex-1 mr-0 md:mr-2 mb-3 md:mb-0"
          />
          <Dropdown
            value={ratingValue}
            onChange={(e) => setRatingValue(e.target.value)}
            options={rating}
            placeholder="Rate a Book"
          />
        </div>
        <InputTextarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Enter your Message"
          rows={5}
          cols={30}
          className="w-full mt-3"
        />
        {showError && (
          <span className="text-red-500">
            You should fill all the fields to submit review
          </span>
        )}
        <div className="flex justify-content-center mt-3">
          <span
            className="flex align-items-center backBtn cursor-pointer"
            onClick={handleSubmit}
          >
            Submit Review
            <i className="pi pi-angle-double-right ml-2"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Review;
