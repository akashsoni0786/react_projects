import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Book.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
const Book = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(2);
  const [isbn_arr, setISBN_arr] = React.useState("");

  const { details } = location.state;
  console.log(details);

  const preview = async (isbn) => {
    try {
      const url2 = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
      const response2 = await fetch(url2);
      const resjson2 = response2.json();
      resjson2.then((result) => {
        // setISBN_arr(result);
        console.log(result);
        try {
          let a = "ISBN:" + isbn;
          console.log(result[a].preview_url);
          setISBN_arr(result[a].preview_url);
        } catch (e) {
          console.log(e);
        }
      });
    } catch (e) {
      alert("Not found");
    }
  };

  // React.useEffect(() => {
  //   preview(details.isbn[0]);
  // }, []);

  return (
    <div>
      <div
        className="details"
        style={{ backgroundColor: props.bg, color: props.fonts }}
      >
        <div>
          <div className="left">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                backgroundColor: props.bg,
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
              <Rating
                color="warning"
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
              />
            </div>
          </div>
        </div>

        <div
          className="rightdiv"
          style={{ backgroundColor: props.bg, color: props.fonts }}
        >
          <p className="title">{details.title}</p>
          <p className="authorname">
            Author name :<i>{details.author_name}</i>
          </p>
          <p className="restdetails">Publish Date: {details.publish_date[0]}</p>

          <p className="restdetails">Edition: {details.edition_count}</p>

          <p className="restdetails">
            Publisher : {details.publisher_facet[0]}
          </p>

          <p className="restdetails">Publish year: {details.publish_date[0]}</p>

          <div className="btns">
            <a
              href={`https://openlibrary.org/works/${details.cover_edition_key}`}
              className="buttons"
            >
              Want to Read
            </a>

            <a
              href={`https://www.google.co.in/books/edition/Slow_reading/qq?hl=en`}
              className="buttons"
            >
              Preview
            </a>

            <a
              className="buttons"
              href="https://openlibrary.org/account/login?redirect=/books/"
            >
              Complete Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
