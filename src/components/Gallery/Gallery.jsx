import React from "react";

const Gallery = () => {
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
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
