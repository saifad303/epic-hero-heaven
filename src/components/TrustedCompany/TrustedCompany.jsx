import React from "react";

const TrustedCompany = () => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-sm text-gray-600 text-center mb-10 ">
          TRUSTED BY TEAMS FROM AROUND THE WORLD
        </h3>
        <div className="mt-6">
          <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
            {/* LOGO 1 */}
            <li className="flex-none">
              <img src="/img/lego-icon.png" alt="" className=" w-36" />
            </li>

            {/* LOGO 2 */}
            <li className="flex-none">
              <img src="/img/barbie.png" alt="" className=" w-36" />
            </li>

            {/* LOGO 3 */}
            <li className="flex-none">
              <img src="/img/polly-pocket.png" alt="" className=" w-36" />
            </li>

            {/* LOGO 4 */}
            <li className="flex-none">
              <img src="/img/hot-wheels.png" alt="" className=" w-36" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
