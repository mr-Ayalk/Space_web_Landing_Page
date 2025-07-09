import React from "react";
import sateliteImage from "../../assets/satellite.png";
function Banner() {
  return (
    <div className="bg-black text-white pb-1 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div data-aos="zoom-in" className="">
            <img
              src={sateliteImage}
              alt="Satellite"
              className=" w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2  border-b-2 border-r-sky-800 border-b-sky-800">
            <p data-aos="fade-up" className="text-sky-800 uppercase">
              Our Mission
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase text-5xl"
            >
              Rapidcast
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              assumenda eaque, voluptatum quidem id vel saepe officiis.
              Excepturi quisquam neque impedit incidunt perspiciatis? Veritatis
              voluptas ut illum commodi debitis nisi.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
