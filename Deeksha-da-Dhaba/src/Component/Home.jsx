// import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Products } from "./Products";
const slideImages = [
  {
    url: "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png",
    caption: "Slide 1",
  },
  {
    url: "https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718097.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=20&m=1220017909&s=170667a&w=0&h=Kjdsgm1tUOVBDuP060hGA9kR_OHNr7_4HfnCFrdkmhw=",
    caption: "Slide 3",
  },
];

const Home = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setFoodData(res.data.categories);
      });
  }, []);
  console.log(foodData);
  return (
    <div>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div className="sarkar">
                <img
                  src={slideImage.url}
                  width="100%"
                  height="100%"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="grid grid-cols-3  gap-7 m-6 text-xs ">
        {foodData.map((e) => {
          return <Products prop={e} />;
        })}
      </div>
    </div>
  );
};

export default Home;
