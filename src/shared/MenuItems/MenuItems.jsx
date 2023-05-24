import React, { useEffect, useState } from "react";
import SectionTitle from "../../componensts/SectionTitle/SectionTitle";
import MenuCard from "./MenuCard";
import useMenu from "../../hooks/useMenu";

const MenuItems = () => {

  const [menu] = useMenu()
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-5">
      <SectionTitle
        subHeading={"popular items"}
        heading={"From our menu"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-3 ">
        {popularItems.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </div>
      <div className="text-center my-5">
        <button className="btn border-0 border-b-4 hover:text-white bg-white text-black">
          Vew full menu
        </button>
      </div>
    </div>
  );
};

export default MenuItems;
