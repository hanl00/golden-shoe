import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter-contaner mt-2">
      <h5>Not a Golden Shoe member?</h5>
      <p className="text-muted">
        Stay updated with latest releases and offers
      </p>
      <div className="input-contaner mt-2">
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
