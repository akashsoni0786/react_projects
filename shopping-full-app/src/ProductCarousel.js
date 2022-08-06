import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function ProductCarousel() {
  var items = [
    {
      name: "Pizza Begin",
      link: "pizza-begin.co.il",
      image:
        "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    },
    {
      name: "Mia Luz",
      link: "mia-luz.com",
      image:
        "https://admintcns.wforwoman.com/product/22FEA13190-504281/665/22FEA13190-504281_1.JPG",
    },
    {
      name: "Nuda Swim",
      link: "https://admintcns.wforwoman.com/product/22FEA13190-504281/665/22FEA13190-504281_1.JPG",
    },
  ];

  return (
    <>
      <Carousel
        navButtonsAlwaysInvisible={true}
        animation="slide"
        activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
      >
        {items.map((item, i) => (
        
              <div className="allcards">
                <div className="cards">
                  <img
                    alt=""
                    src="https://i.pinimg.com/originals/74/c9/14/74c914ebbfc3167a7a8b9c0c7ba6693b.png"
                  />
                  <p>Fast Delivery</p>
                  <span>variations of passages of Lorem Ipsum available</span>
                </div>

                <div className="cards">
                  <img
                    alt=""
                    src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-basket-emblem-15.png"
                  />
                  <p>Free Shiping</p>
                  <span>variations of passages of Lorem Ipsum available</span>
                </div>

                <div className="cards">
                  <img
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Snapdeal_Logo_new.png/480px-Snapdeal_Logo_new.png"
                  />
                  <p>Best Quality</p>
                  <span>variations of passages of Lorem Ipsum available</span>
                </div>

                <div className="cards">
                  <img
                    alt=""
                    src="https://store-images.s-microsoft.com/image/apps.20666.13510798883311347.b2862cbf-b4ca-49f7-86ca-4ddafc840192.b1f9f7b9-6ded-4f81-9f75-55469a5e43e6"
                  />
                  <p>Best Quality</p>
                  <span>variations of passages of Lorem Ipsum available</span>
                </div>
              </div>
            
        ))}
      </Carousel>

      
    </>
  );
}

function Item(props) {
  return (
    <Paper className="item">
     
      <h2
        onClick={() => {
          window.location.href = props.item.link;
        }}
      >
        {props.item.name}
      </h2>
    </Paper>
  );
}

// export default ProductCarousel;
