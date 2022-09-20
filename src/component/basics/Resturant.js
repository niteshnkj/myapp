import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";

const Resturant = () => {
  const [menuData] = useState(Menu);
  console.log(menuData);

  return (
    <>
    <MenuCard menuData={menuData}/>
    </>
  );
};

export default Resturant;
