import React from "react";

const MenuCard = ({ item }) => {
  const { name, price, recipe, image } = item || {};
  // console.log(image);
  return (
    <div className="flex gap-2 my-5 ">
      <img className="h-[100px]" style={{borderRadius:"0 200px 200px 200px"}} src={image} alt="" />
      <div>
        <p className="uppercase  font-semibold">{name}</p>
        <p>{recipe}</p>
      </div>
      <p>price : ${price}</p>
    </div>
  );
};

export default MenuCard;
