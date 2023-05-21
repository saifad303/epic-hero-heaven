import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Rate } from "antd";
import { useAuthProvider } from "../context/AuthProvider";
import axios from "axios";
import SmallSpinner from "../components/Loading/SmallSpinner";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToy = () => {
  const [rate, setRate] = useState(0);
  const navigate = useNavigate();
  const [isNoRate, setIsNoRate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signedInUser, apiLinkPrefix } = useAuthProvider();

  const starRateHandler = (rate) => {
    console.log(rate);
    setRate(rate);
  };

  // const notify = () =>
  //   toast.success("New toy has been entered!", {
  //     position: "top-center",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });

  const toySubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;

    if (rate) {
      const name = form.name.value;
      const imageURL = form.imgUrl.value;
      const description = form.desc.value;
      const subcategory = form.subcat.value;
      const quantity = form.quantity.value;
      const price = form.price.value;

      setIsNoRate(false);

      // console.log("Add toy = ", {
      //   name,
      //   imageURL,
      //   description,
      //   subcategory,
      //   quantity,
      //   price,
      //   rating: rate,
      // });

      const data = {
        name,
        imageURL,
        description,
        subcategory,
        quantity,
        price,
        rating: rate,
      };

      axios
        .post(
          `${apiLinkPrefix}toys`,
          {
            data,
          },
          {
            headers: {
              name: signedInUser.displayName,
              email: signedInUser.email,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setIsLoading(false);
          toast.success("Data submitted successfully!");
          navigate("/my-toys");
        });
    } else {
      setIsNoRate(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[300px] xsm:w-[490px] sm:w-[620px] lg:w-[950px] xl:w-[1200px] mx-auto mt-[100px] my-10">
      <Helmet>
        <title>Epic Hero Heaven | Add Toy</title>
      </Helmet>

      <div className="max-w-lg mb-10">
        <h3 className="text-slate-700 text-xl font-bold sm:text-2xl">
          Add a new toy
        </h3>
      </div>

      <div className=" flex flex-col my-4 gap-1 text-slate-600 font-semibold">
        <p>Seller name: {signedInUser.displayName}</p>
        <p>Seller email: {signedInUser.email}</p>
      </div>

      {isNoRate && (
        <div
          className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Error!</span> No rate has been entered
          </div>
        </div>
      )}

      <form action="" onSubmit={(e) => toySubmitHandler(e)}>
        <div className="mb-6">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Toy name
          </label>
          <input
            required
            name="name"
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Photo URL
          </label>
          <input
            required
            name="imgUrl"
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6 mt-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Detail description
          </label>
          <input
            required
            name="desc"
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select subcategory
        </label>
        <select
          required
          name="subcat"
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Select sub-category</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
          <option value="Transformers">Transformers</option>
        </select>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900"
          >
            Add quantity (Number input)
          </label>
          <input
            required
            type="number"
            name="quantity"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 "
          >
            Price (Number input)
          </label>
          <input
            required
            name="price"
            type="number"
            id="small-input"
            className=" appearance-none block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-5">
          <label
            htmlFor="small-input"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900"
          >
            Rate:
          </label>
          <Rate
            defaultValue={0}
            tooltips={[1, 2, 3, 4, 5]}
            style={{ fontSize: "30px", color: "#EA6067" }}
            onChange={(value) => starRateHandler(value)}
          />
        </div>

        <div>
          <button
            disabled={isLoading ? true : false}
            type="submit"
            className="text-white bg-[#EA6067] font-medium rounded-full text-sm px-12 py-3 text-center mr-2 mb-2 mt-9"
          >
            {isLoading ? <SmallSpinner></SmallSpinner> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
