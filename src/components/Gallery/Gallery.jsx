import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthProvider } from "../../context/AuthProvider";
import Spinner from "../Loading/Spinner";

const Gallery = () => {
  const [photoURL, setPhotoURL] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { apiLinkPrefix } = useAuthProvider();

  useEffect(() => {
    axios.get(`${apiLinkPrefix}gallery`).then((res) => {
      // console.log(res.data);
      setPhotoURL(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="w-[300px] xsm:w-[490px] sm:w-[620px] lg:w-[950px] xl:w-[1200px] mx-auto">
      <div className="max-w-xl mx-auto space-y-3 mt-[130px] mb-[50px]">
        <p className="text-slate-700 text-center text-3xl font-semibold sm:text-4xl">
          Photo Gallery
        </p>
        <p className="text-center text-slate-500">
          Toy Treasures Unleashed: Step into a Captivating Visual Showcase of
          Endless Playtime Delights
        </p>
      </div>

      <div className="grid grid-cols-1 xsm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4">
        {photoURL.map(({ imageURL }, idx) => (
          <div
            key={idx}
            className=" shadow-md shadow-[#EA6067]/20 border border-[#EA6067]/50 rounded-lg p-7"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img
              className=" h-64 mx-auto max-w-full rounded-lg"
              src={imageURL}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
