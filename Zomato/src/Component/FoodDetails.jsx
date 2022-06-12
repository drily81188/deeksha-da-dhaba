import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FoodDetails = () => {
  const { id } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setList(res.data.meals);
      });
  }, []);
  console.log(list);

  return (
    <div>
      {list.map((e) => {
        return (
          <div>
            <section>
              <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
                <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                  <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                    <div class="aspect-w-1 aspect-h-1">
                      <img
                        alt="Mobile Phone Stand"
                        class="object-cover rounded-xl"
                        src={e.strMealThumb}
                      />
                    </div>
                  </div>

                  <div class="sticky top-0">
                    <strong class="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
                      {" "}
                      Pre Order{" "}
                    </strong>

                    <div class="flex justify-between mt-8">
                      <div class="max-w-[35ch]">
                        <h1 class="text-2xl font-bold">{e.strMeal}</h1>

                        <p class="mt-0.5 text-sm">Highest Rated Product</p>

                        <div class="flex mt-2 -ml-0.5">
                          <svg
                            class="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="w-5 h-5 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="w-5 h-5 text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <details class="relative mt-4 group">
                      <summary class="block">
                        <div>
                          <div class="prose max-w-none group-open:hidden">
                            <p>{e.strInstructions}</p>
                          </div>

                          <span class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                            Read More
                          </span>
                        </div>
                      </summary>
                    </details>

                    <div class="mt-8">
                      <div class="flex mt-8">
                        <div>
                          <label for="quantity" class="sr-only">
                            Qty
                          </label>

                          <input
                            type="number"
                            id="quantity"
                            min="1"
                            placeholder="1"
                            class="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
                          />
                        </div>

                        <button class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};
