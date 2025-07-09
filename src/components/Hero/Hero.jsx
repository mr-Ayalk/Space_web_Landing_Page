import React from "react";

function Hero() {
  return (
    <div className="h-full bg-black/20 text-white relative z-50">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">Orbit The Earth</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              exercitationem excepturi consectetur. Cupiditate eos, quae iure
              consequatur amet itaque. Culpa incidunt nostrum enim consectetur
              repellat obcaecati consequuntur commodi voluptatibus! Ipsa?
            </p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200">
              Learn More
            </button>
          </div>

<div className=""></div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
