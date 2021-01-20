import React, { useState } from "react";
import "./terminal.css";

const Terminal = () => {
  const [ismodal, setmodal] = useState("true");
  return (
    <div className="main">
      <button
        onClick={() => {
          setmodal(!ismodal);
        }}
      >
        {/* Modal */}
        <h1>Terminal Management</h1>
      </button>

      <div className={ismodal ? "modal" : "modal-hide"}>
        <div className="modal-heading">
          <div className="help">
            <p className="modal-heading-help">Help Center</p>
            <hr style={{ width: "350px" }}></hr>
          </div>
          <div className="contact">
            <p className="modal-heading-contact">Contact Us</p>
            <hr style={{ width: "350px" }}></hr>
          </div>
        </div>
        <div className="content">
          <div className="how">How Can we Help You?</div>
          <button className="faq">GO TO FAQ'S</button>
          <p>Browse by Category</p>
        </div>
        <div className="items">
          <div className="first">
            <div className="dummy">
              <p className="dummy-text">Started with warehousing</p>
            </div>
            <div className="dummy">
              <p className="dummy-text">Started with warehousing</p>
            </div>
          </div>
          <div className="first">
            <div className="dummy">
              <p className="dummy-text">Started with warehousing</p>
            </div>
            <div className="dummy">
              <p className="dummy-text">Started with warehousing</p>
            </div>
          </div>
          <div className="first">
            <div className="dummy">
              <p className="dummy-text">Started with warehousing</p>
            </div>
            <div className="dummy">
              <p className="dummy-text">Started with warehousing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
