import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const AllToys = () => {
  const navigate = useNavigate();

  const viewDetailHandler = () => {
    navigate(`/toy/12`);
  };

  const tableItems = [
    {
      name: "Liam James",
      email: "liamjames@example.com",
      subcategory: "Software engineer",
      quantity: 100,
      salary: "$100K",
    },
    {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      subcategory: "Product designer",
      quantity: 100,
      salary: "$90K",
    },
    {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      subcategory: "Front-end developer",
      quantity: 100,
      salary: "$80K",
    },
    {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      subcategory: "Laravel engineer",
      quantity: 100,
      salary: "$120K",
    },
    {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      subcategory: "Open source manager",
      quantity: 100,
      salary: "$75K",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 my-[80px]">
      <Helmet>
        <title>Epic Hero Heaven | All Toys</title>
      </Helmet>
      <section className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-slate-700 text-xl font-bold sm:text-2xl">
              All toys
            </h3>
            <p className="text-slate-400 mt-2">
              One Destination: Dive into Our Complete Product Collection
            </p>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-x-3 md:justify-end"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Search toy"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-[#EA6067] shadow-sm rounded-lg"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-[#EA6067]   active:shadow-none rounded-lg shadow">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full"></div>
      </section>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Toy name</th>
              <th className="py-3 px-6">Seller name</th>
              <th className="py-3 px-6">Sub category</th>
              <th className="py-3 px-6">Quantity</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.subcategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    onClick={viewDetailHandler}
                    className="py-2 leading-none px-3 font-medium text-[#EA6067]  hover:bg-gray-100 rounded-lg"
                  >
                    View Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
