import React from "react";
import { Link } from "react-router-dom";

export const CatogryProduct = ({ prop }) => {
  return (
    <Link to={`/details/${prop.idMeal}`}>
      <div className="h-[450px] overflow-hidden">
        <a className="block overflow-hidden group" href="/products/basic-tee">
          <div className="shadow-[0_4px_0_0_rgba(0,0,0,1)] border-2 border-black rounded-3xl overflow-hidden">
            <img
              className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[350px] "
              src={prop.strMealThumb}
              alt="Basic Tee Product"
            />
          </div>

          <div className="relative pt-4">
            <h3 className="text-sm group-hover:underline group-hover:underline-offset-4">
              {prop.strMeal}
            </h3>
          </div>
        </a>
      </div>
    </Link>
  );
};
