import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  return (
    <section className="py-12 text-[#EA6067] sm:py-16 lg:py-20 ">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="max-w-xl mx-auto space-y-3 ">
            <p className="text-slate-700 text-center text-3xl font-semibold sm:text-4xl">
              Testimonial
            </p>
            <p className="text-center text-slate-500">
              Hear What Our Customers Have to Say About Our Amazing Toys
            </p>
          </div>

          <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="flex flex-col rounded-xl border border-[#EA6067] text-center shadow-xl shadow-[#EA6067]/20"
            >
              <div className="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                <span className="absolute -left-5 -top-6 rounded-full border border-[#EA6067] bg-white p-3 text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="border-[#EA6067] px-10 text-xl font-black">
                    Absolutely recommended!
                  </p>

                  <blockquote className="mt-8 flex-1">
                    <p className="leading-relaxed text-slate-600">
                      Durable and reliable! These toys withstand even the most
                      energetic play.
                    </p>
                  </blockquote>
                </div>

                <div className="-mx-5 mt-8 px-8 py-1">
                  <div className="">
                    <p className="text-base font-bold">James Khawalski</p>
                    <p className="mt-0.5 text-sm">CEO, Mavoline</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="flex flex-col rounded-xl border border-[#EA6067] text-center shadow-xl shadow-[#EA6067]/20"
            >
              <div className="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                <span className="absolute -left-5 -top-6 rounded-full border border-[#EA6067] bg-white p-3 text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="border-[#EA6067] px-10 text-xl font-black">
                    Service was amazing!
                  </p>

                  <blockquote className="mt-8 flex-1">
                    <p className="leading-relaxed text-slate-600">
                      Unforgettable joy! These toys bring endless smiles to my
                      kids' faces. Thank you!
                    </p>
                  </blockquote>
                </div>

                <div className="-mx-5 mt-8 px-8 py-1">
                  <div className="">
                    <p className="text-base font-bold">Jacob Jones</p>
                    <p className="text-blue-90 mt-0.5 text-sm">
                      Youtube Personality
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="flex flex-col rounded-xl border border-[#EA6067] text-center shadow-xl shadow-[#EA6067]/20"
            >
              <div className="relative flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
                <span className="absolute -left-5 -top-6 rounded-full border border-[#EA6067] bg-white p-3 text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="border-blue-500 px-10 text-xl font-black">
                    Saved me 1000s of hours
                  </p>

                  <blockquote className="mt-8 flex-1">
                    <p className="leading-relaxed text-slate-700">
                      Quality and variety! I found the perfect toys here for my
                      little one's imagination.
                    </p>
                  </blockquote>
                </div>

                <div className="-mx-5 mt-8 px-8 py-1">
                  <div className="">
                    <p className="text-base font-bold">Jenny Wilson</p>
                    <p className="text-blue-90 mt-0.5 text-sm">
                      Esports Commentator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
