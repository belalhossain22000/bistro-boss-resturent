import React from "react";
import feature from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../componensts/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div
      className="my-20 p-20 bg-slate-500 opacity-90   bg-fixed "
      style={{ backgroundImage: `url(${feature})` }}
    >
      <SectionTitle subHeading={"check it out"} heading={"Feom Our menu"}>
        {" "}
      </SectionTitle>
      <div className="flex w-full  items-center justify-center text-white gap-10 px-36 py-10  ">
        <div>
          <img src={feature} alt="" />
        </div>
        <div>
          <p>March 20 , 2023</p>
          <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            suscipit modi neque. Blanditiis aut sint aliquid. Quibusdam
            doloremque fugiat neque.
          </p>
          <button className="btn border-0 border-b-4 hover:text-white bg-white text-black">
            Vew full menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
