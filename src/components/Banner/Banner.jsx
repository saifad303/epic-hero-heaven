import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  const allToysNavigateHandler = () => {
    navigate("/toys");
  };

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "" },
    { title: "Careers", path: "" },
  ];

  return (
    <div className="bg-[#EAE4D9]/20">
      <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div
          className="space-y-4 flex-1 sm:text-center lg:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className=" text-slate-700 font-bold text-4xl xl:text-5xl">
            Epic Heros Heaven Where Dreams Take Flight
          </h1>
          <p className="text-slate-400 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Toy land emporium unleash Your Imagination and Embark on an
            Extraordinary Journey of Play, Wonder, and Delight
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <button
              onClick={allToysNavigateHandler}
              className="px-7 py-3 w-full bg-[#EA6067] text-white text-center rounded-md block sm:w-auto font-bold"
            >
              View Toys
            </button>
          </div>
        </div>
        <div
          className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src="/img/banner.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
