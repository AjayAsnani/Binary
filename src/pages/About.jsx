import React from "react";
import Metrics from "../components/Metrics";

function About() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col ">
        <div className="flex w-full bg-[#FFE0C3] py-20 px-40 justify-between flex-col md:flex-row  text-black">
          <div className="px-6">
            <h2 className="text-4xl font-bold w-90 h-40 ">
              Our mission is to transform how you manage emails
            </h2>
            <div>
              Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div>
            <iframe
              className="rounded-xl"
              width="1000"
              height="600"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div>

        <Metrics />
      </div>
    </div>
  );
}

export default About;
