import React from "react";
import sateliteImage from "../../assets/rocket.png";
function Banner2() {
  return (
    <div className="bg-black text-white pb-1 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div className="space-y-3 xl:pr-36 p-4 border-l-2  border-b-2 border-l-sky-800 border-b-sky-800">
            <p className="text-sky-800 uppercase">Our Mission</p>
            <h1 className="uppercase text-5xl">Rocket</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              assumenda eaque, voluptatum quidem id vel saepe officiis.
              Excepturi quisquam neque impedit incidunt perspiciatis? Veritatis
              voluptas ut illum commodi debitis nisi.
            </p>
            <button className="primary-button">Learn More</button>
          </div>
          <div className="">
            <img src={sateliteImage} alt="Satellite" className="px-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
