import React from "react";

const MyToys = () => {
  const tableItems = [
    {
      name: "Liam James",
      quantity: "100",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      name: "Olivia Emma",
      quantity: "100",
      position: "Product designer",
      salary: "$90K",
    },
    {
      name: "William Benjamin",
      quantity: "100",
      position: "Front-end developer",
      salary: "$80K",
    },
    {
      name: "Henry Theodore",
      quantity: "100",
      position: "Laravel engineer",
      salary: "$120K",
    },
    {
      name: "Amelia Elijah",
      quantity: "100",
      position: "Open source manager",
      salary: "$75K",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-[80px]">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-slate-700 text-xl font-bold sm:text-2xl">
            My toys
          </h3>
          <p className="text-slate-400 mt-2">Toys that I have entered</p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href=""
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-[#EA6067] rounded-lg  md:text-sm"
          >
            Add toy
          </a>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Toy name</th>
              <th className="py-3 px-6">Quantity</th>
              <th className="py-3 px-6">Sub category</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    href=""
                    className="py-2 leading-none px-3 font-medium text-violet-700  hover:bg-gray-100 rounded-lg"
                  >
                    Update
                  </button>
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    href=""
                    className="py-2 leading-none px-3 font-medium text-red-600  hover:bg-gray-100 rounded-lg"
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

export default MyToys;
