import React from "react";
import TopBar from "./TopBar";

function ContactUs() {
  return (
    <div>
      <TopBar />
      <div className="m-3 flex">
        <div className="flex flex-column">
          <h2 className="mb-3">Contact Us</h2>
          <span>Feel free to use the form or drop us an Email,</span>
          <span>Old-fashioned phone calls work too.</span>
          <span className="mt-2">
            <i className="pi pi-phone mr-2"></i>
            9876543210
          </span>
          <span className="mt-2">
            <i className="pi pi-envelope mr-2"></i>
            medley@gmail.com
          </span>
          <span className="mt-2">
            <i className="pi pi-map-marker mr-2"></i>
            24, East Street, Chennai.
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ContactUs;
