import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#003145]">
      <section className="max-w-screen-xl w-full m-auto  flex justify-between px-4 items-center py-16 ">
        <div class=" md:py-12 md:w-3/5 lg:py-24">
          <div class="mx-auto  text-center sm:text-left">
            <h2 class="text-3xl border-l-8 pl-12 border-yellow-200 font-bold text-white md:text-5xl">
              Accelerate Innovation with Global AI Challenges
            </h2>

            <p class="pl-12  text-white mt-10 md:block text-xl">
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>

            <div class="pl-12 mt-4 md:mt-12">
              <Link
                to={'/create'}
                class="inline-block  bg-white rounded-md px-12 py-3  font-medium  text-xl transition"
              >
                Create Chalenge
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://svgshare.com/i/nGm.svg"
          class="md:w-2/5  object-cover "
        />
      </section>
      <div className="py-12 bg-[#002A3B] md:flex justify-around">
        <div className="flex justify-center items-center m-4">
          <img
            className="bg-white mr-4 p-5 rounded-lg"
            src="https://iili.io/Qg5J6J.png"
            alt=""
          />
          <span className="text-white">
            <h2 className="text-2xl font-bold">100K+</h2>
            <p className="text-base  font-medium">AI model submissions</p>
          </span>
        </div>
        <div className="flex justify-center items-center m-4">
          <img
            className="bg-white mr-4 p-5 rounded-lg"
            src="https://iili.io/QgZeyX.png"
            alt=""
          />
          <span className="text-white">
            <h2 className="text-2xl font-bold">50K+</h2>
            <p className="text-base  font-medium">Data Scientists</p>
          </span>
        </div>
        <div className="flex justify-center items-center m-4">
          <img
            className="bg-white mr-4 p-5 rounded-lg"
            src="https://iili.io/QgZvun.png"
            alt=""
          />
          <span className="text-white">
            <h2 className="text-2xl font-bold">100+</h2>
            <p className="text-base  font-medium">AI Challenges hosted</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
