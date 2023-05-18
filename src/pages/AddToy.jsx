import React, { useState } from "react";
import { Rate } from "antd";

const AddToy = () => {
  const starRateHandler = (rate) => {
    console.log(rate);
  };

  return (
    <div className="w-[300px] xsm:w-[490px] sm:w-[620px] lg:w-[950px] xl:w-[1200px] mx-auto mt-[100px] my-10">
      <div class="max-w-lg mb-10">
        <h3 class="text-slate-700 text-xl font-bold sm:text-2xl">
          Add a new toy
        </h3>
      </div>
      <form action="">
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Toy name
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6 mt-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Detail description
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select your country
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="0">Select sub-category</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
          <option value="Transformers">Transformers</option>
        </select>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
          >
            Add quantity (Number input)
          </label>
          <input
            type="number"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price (Number input)
          </label>
          <input
            type="number"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-5">
          <label
            htmlFor="small-input"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
          >
            Rate:
          </label>
          <Rate
            defaultValue={0}
            tooltips={[1, 2, 3, 4, 5]}
            style={{ fontSize: "30px" }}
            onChange={(value) => starRateHandler(value)}
          />
        </div>
        <div>
          <button
            type="submit"
            class="text-white bg-[#EA6067] font-medium rounded-full text-sm px-12 py-3 text-center mr-2 mb-2 mt-9"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
