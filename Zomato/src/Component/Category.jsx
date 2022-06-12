import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatogryProduct } from "./CatogryProduct";

export const Category = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(10);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        setData(res.data.meals);
      });
  }, []);
  const handler = (a, b) => {
    setLimit(a);
    setPage(b);
  };
  const handPage = (c) => {
    if (c == -10 && limit <= 0) {
      setLimit(0);
      setPage(10);
    } else if (c == -10 && limit >= 0) {
      setLimit(limit - 10);
      setPage(page - 10);
    } else if (c == 10 && limit >= 40) {
      setLimit(30);
      setPage(40);
    } else if (c == 10 && limit <= 40) {
      setLimit(limit + 10);
      setPage(page + 10);
    }
  };

  return (
    <>
      <ol className="flex justify-center space-x-1 text-xs font-medium">
        <li>
          <div
            onClick={() => {
              handPage(-10);
            }}
            className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </li>

        <li>
          <div
            onClick={() => {
              handler(0, 10);
            }}
            className="block w-8 h-8 leading-8 text-center  rounded-full"
          >
            {" "}
            1{" "}
          </div>
        </li>

        <li
          onClick={() => {
            handler(10, 20);
          }}
          className="block w-8 h-8 leading-8 text-center rounded-full"
        >
          2
        </li>

        <li>
          <div
            onClick={() => {
              handler(20, 30);
            }}
            className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded-full"
          >
            {" "}
            3{" "}
          </div>
        </li>

        <li>
          <div
            onClick={() => {
              handler(30, 40);
            }}
            className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded-full"
          >
            {" "}
            4{" "}
          </div>
        </li>

        <li>
          <div
            onClick={() => {
              handPage(10);
            }}
            className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ol>
      <div className="grid grid-cols-3  gap-7 m-6 text-xs ">
        {data.slice(limit, page).map((e) => {
          return <CatogryProduct key={e.idMeal} prop={e} />;
        })}
      </div>
    </>
  );
};
