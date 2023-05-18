import React from "react";

const Services = () => {
  const features = [
    {
      icon: (
        <img src="/img/free-shipping-icon.svg" alt="" className="w-7 h-7" />
      ),
      title: "Free shipping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: (
        <img src="/img/customer-service-icon.svg" alt="" className="w-7 h-7" />
      ),
      title: "24h support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: <img src="/img/payment-icon.svg" alt="" className="w-7 h-7" />,
      title: "Secure payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl mx-auto space-y-3">
          <p className="text-gray-800 text-center text-3xl font-semibold sm:text-4xl">
            Our services
          </p>
          <p className="text-center">
            Where Imagination Meets Delight: Explore Our Enchanting Collection
            of Toys and Bring Smiles to Every Child's Face!
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
