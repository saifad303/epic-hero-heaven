import React from "react";

const Services = () => {
  const features = [
    {
      icon: (
        <img src="/img/free-shipping-icon.svg" alt="" className="w-7 h-7" />
      ),
      title: "Free shipping",
      desc: "Seamless Shopping Experience: Enjoy Free Shipping on All Orders",
    },
    {
      icon: (
        <img src="/img/customer-service-icon.svg" alt="" className="w-7 h-7" />
      ),
      title: "24h support",
      desc: "Your Needs, Anytime: Enjoy Our 24/7 Service Commitment",
    },
    {
      icon: <img src="/img/payment-icon.svg" alt="" className="w-7 h-7" />,
      title: "Secure payment",
      desc: "Protecting Your Transactions: Experience Safe and Secure Payments.",
    },
  ];

  return (
    <section className="" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl mt-[90px] mx-auto space-y-3">
          <p className="text-slate-700 text-center text-3xl font-semibold sm:text-4xl">
            Our services
          </p>
          <p className="text-center text-slate-500">
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
                <div className="w-12 h-12 border bg-[#EA6067] rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-slate-700 font-semibold">
                  {item.title}
                </h4>
                <p className=" text-slate-400">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
