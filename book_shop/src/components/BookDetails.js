import React, { useEffect } from "react";
import { useStoreState } from "easy-peasy";
import BuyBook from "./BuyBook";
import { Link } from "react-router-dom";
import TabComponent from "./TabComponent";
import RelatedBooks from "./RelatedBooks";
import TopBar from "./TopBar";

function BookDetails() {
  const book = useStoreState((state) => state.book);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <TopBar />
      <div className="m-3">
        <BuyBook />
        <TabComponent />
        <RelatedBooks />
      </div>
    </div>
  );
}

export default BookDetails;
