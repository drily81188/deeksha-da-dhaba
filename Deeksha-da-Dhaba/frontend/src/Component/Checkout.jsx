import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export const Checkout = () => {
  const [check, setCheck] = useState(false);
  const nav = useNavigate();

  const thanku = () => {
    setCheck(true);
    setTimeout(() => {
      nav("/");
    }, 3000);
  };

  return (
    <div>
      {check ? (
        <div
          class="flex items-center justify-center mb-8 mt-8 gap-4 p-4 text-white bg-gray-900 rounded"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>

          <strong class="text-sm font-normal"> your order sucessfull </strong>
        </div>
      ) : (
        <section>
          <h1 class="sr-only">Checkout</h1>

          <div class="relative mx-auto max-w-screen-2xl">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="py-12 bg-white md:py-24">
                <div class="max-w-lg px-4 mx-auto lg:px-8">
                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-span-3">
                      <label
                        class="block mb-1 text-sm text-gray-600"
                        for="first_name"
                      >
                        First Name
                      </label>

                      <input
                        class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                        type="text"
                        id="frst_name"
                      />
                    </div>

                    <div class="col-span-3">
                      <label
                        class="block mb-1 text-sm text-gray-600"
                        for="last_name"
                      >
                        Last Name
                      </label>

                      <input
                        class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                        type="text"
                        id="last_name"
                      />
                    </div>

                    <div class="col-span-6">
                      <label
                        class="block mb-1 text-sm text-gray-600"
                        for="email"
                      >
                        Email
                      </label>

                      <input
                        class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div class="col-span-6">
                      <label
                        class="block mb-1 text-sm text-gray-600"
                        for="phone"
                      >
                        Phone
                      </label>

                      <input
                        class="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                        type="tel"
                        id="phone"
                      />
                    </div>

                    <fieldset class="col-span-6">
                      <legend class="block mb-1 text-sm text-gray-600">
                        Card Details
                      </legend>

                      <div class="-space-y-px bg-white rounded-lg shadow-sm">
                        <div>
                          <label class="sr-only" for="card-number">
                            Card Number
                          </label>

                          <input
                            class="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                            type="text"
                            name="card-number"
                            id="card-number"
                            placeholder="Card number"
                          />
                        </div>

                        <div class="flex -space-x-px">
                          <div class="flex-1">
                            <label class="sr-only" for="card-expiration-date">
                              Expiration Date
                            </label>

                            <input
                              class="border-gray-200 relative rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                              type="text"
                              name="card-expiration-date"
                              id="card-expiration-date"
                              placeholder="MM / YY"
                            />
                          </div>

                          <div class="flex-1">
                            <label class="sr-only" for="card-cvc">
                              CVC
                            </label>

                            <input
                              class="border-gray-200 relative rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                              type="text"
                              name="card-cvc"
                              id="card-cvc"
                              placeholder="CVC"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset class="col-span-6">
                      <legend class="block mb-1 text-sm text-gray-600">
                        Billing Address
                      </legend>

                      <div class="-space-y-px bg-white rounded-lg shadow-sm">
                        <div>
                          <label class="sr-only" for="country">
                            Country
                          </label>

                          <select
                            class="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
                            id="country"
                            name="country"
                            autocomplete="country-name"
                          >
                            <option>England</option>
                            <option>Wales</option>
                            <option>Scotland</option>
                            <option>France</option>
                            <option>Belgium</option>
                            <option>Japan</option>
                          </select>
                        </div>

                        <div>
                          <label class="sr-only" for="postal-code">
                            ZIP/Post Code
                          </label>

                          <input
                            class="border-gray-200 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autocomplete="postal-code"
                            placeholder="ZIP/Post Code"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <div class="col-span-6">
                      <button
                        onClick={thanku}
                        class="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
