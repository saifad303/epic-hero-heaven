import React from "react";
import StarRatings from "react-star-ratings";

const ToyDetail = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="e-commerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h3 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h3>
            <div className="flex mb-4">
              <span className="flex items-center">
                <StarRatings
                  rating={3}
                  starDimension="20px"
                  starSpacing="2px"
                  numberOfStars={5}
                  starRatedColor="#EA6067"
                />
                <span className="text-gray-600 ml-3">3 Reviews</span>
              </span>
            </div>
            <p className="text-gray-900 mb-2 text-lg title-font font-medium">
              <span>&#10070;</span> Seller name: My name
            </p>
            <p className="text-gray-900 mb-2 text-lg title-font font-medium">
              <span>&#10070;</span> Seller email: myname@example.com
            </p>
            <p className="text-gray-900 mb-2 text-lg title-font font-medium">
              <span>&#10070;</span> Quantity: 10
            </p>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetail;
