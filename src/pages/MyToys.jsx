import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../context/AuthProvider";
import Spinner from "../components/Loading/Spinner";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const MyToys = () => {
  const navigate = useNavigate();
  const [myToys, setMyToys] = useState([]);
  const { apiLinkPrefix, signedInUser } = useAuthProvider();
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState(1);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (order) {
      axios
        .get(`${apiLinkPrefix}my-toys`, {
          headers: {
            email: signedInUser.email,
            order,
          },
        })
        .then((res) => {
          console.log(res.data);
          setMyToys(res.data);
          setIsLoading(false);
        });
    }
  }, [order]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const viewDetailHandler = (id) => {
    navigate(`/toy/${id}`);
  };

  const addToyHandler = () => {
    navigate(`/add-toy`);
  };

  const toyDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Code for deleting the product from the list
        // This could be an API call or state manipulation
        console.log(id);
        axios.delete(`${apiLinkPrefix}toy/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            const remainToy = myToys.filter((toy) => toy._id !== id);
            setMyToys(remainToy);
          }
        });

        Swal.fire("Deleted!", "The product has been deleted.", "success");
      }
    });
  };

  const updateToyHandler = (id) => {
    console.log(id);
    navigate(`/update-toy/${id}`);
  };

  const changeOrderHandler = (e) => {
    console.log(e.target.value);
    const order = Number(e.target.value);
    if (order) {
      console.log("it has value", order);
      setOrder(order);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-[80px]">
      <Helmet>
        <title>Epic Hero Heaven | My Toys</title>
      </Helmet>
      ;
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-slate-700 text-xl font-bold sm:text-2xl">
            My toys
          </h3>
          <p className="text-slate-400 mt-2">Toys that I have entered.</p>
          <div className=" mt-6">
            <p className=" text-slate-700 mb-2">
              {" "}
              <strong>Seller name: {signedInUser.displayName}</strong>
            </p>
            <p className=" text-slate-700">
              {" "}
              <strong>Seller email: {signedInUser.email}</strong>
            </p>
          </div>
        </div>

        <div className="mt-3 md:mt-0">
          <button
            onClick={addToyHandler}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-[#EA6067] rounded-lg  md:text-sm"
          >
            Add toy
          </button>

          <select
            name=""
            id=""
            required
            onChange={(e) => changeOrderHandler(e)}
            className="ml-5 border-2 border-[#EA6067] px-4 py-2 rounded-lg"
          >
            <option value="">Select order</option>
            <option value="1">Ascending</option>
            <option value="-1">Descending</option>
          </select>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Toy name</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Quantity</th>
              <th className="py-3 px-6">Sub category</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Rating</th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {myToys.map((toy, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap flex gap-5 items-center">
                  <img src={toy.imageURL} className=" w-7" alt="" />
                  {toy.name}
                </td>
                <td className="px-6 py-4">
                  <p className="line-clamp-1">{toy.description}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {toy.subcategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{toy.rating}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={() => updateToyHandler(toy._id)}
                    className="py-2 leading-none px-3 font-medium text-violet-700  hover:bg-gray-100 rounded-lg"
                  >
                    Update
                  </button>
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={() => toyDeleteHandler(toy._id)}
                    className="py-2 leading-none px-3 font-medium text-violet-700  hover:bg-gray-100 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={() => viewDetailHandler(toy._id)}
                    className="py-2 leading-none px-3 font-medium text-red-600  hover:bg-gray-100 rounded-lg"
                  >
                    View Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {myToys.length === 0 && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            No product available from this seller.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyToys;
