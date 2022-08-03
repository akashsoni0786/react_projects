import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { details } = location.state;
  console.log(details);
 
  return (
    <>
      <div className="details">
        <div>
          <div
            style={{
              border: ".2px solid gray",
              padding: "20px",
              borderRadius: "10px",
              width: "max-content",
              margin: "20px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  margin: "10px 0px",
                  height: "480px",
                  width: "270px",
                  backgroundImage:
                    "url(" +
                    `https://covers.openlibrary.org/b/id/${details.cover_i}-M.jpg` +
                    ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>

        <div className="rightdiv">
          <p className="title">{details.title}</p>
          <p className="authorname">
            Author name :<i>{details.author_name}</i>
          </p>
          <p className="restdetails">Publish Date: {details.publish_date}</p>

          <p className="restdetails">Edition: {details.edition_count}</p>

          <p className="restdetails">
            Publisher : {details.publisher_facet[0]}
          </p>

          <p className="restdetails">Publish year: {details.publish_date}</p>

          <div className="btns">
            <a href="https://openlibrary.org/account/login?redirect=/books/" className="buttons">Want to Read</a>

            <a href="https://openlibrary.org/account/login?redirect=/books/" className="buttons">Preview</a>

            <a className="buttons" href="https://openlibrary.org/account/login?redirect=/books/">
              Complete Info
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
