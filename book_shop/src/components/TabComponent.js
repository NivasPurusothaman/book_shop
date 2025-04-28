import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { useStoreState } from "easy-peasy";
import "../styles/commonStyle.css";
import Review from "./Review";

function TabComponent() {

    const book = useStoreState((state) => state.book);

  return (
    <div className="mt-2">
      <TabView>
        <TabPanel header="Book Description">
          <p className="m-0">
            {book.description}
          </p>
        </TabPanel>
        <TabPanel header="About Author">
          <div className="m-0 flex flex-column align-items-left md:flex-row md:align-items-center">
            <img src={book.authorPhoto} height={100} width={100} style={{borderRadius: "100%"}} />
            <div className="ml-3 flex flex-column">
                <span className='text-cyan-500 font-bold mb-2'>{book.authorName}</span>
                <span>{book.aboutAuthor}</span>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Reviews & Ratings">
            <Review />
        </TabPanel>
      </TabView>
    </div>
  );
}

export default TabComponent;
