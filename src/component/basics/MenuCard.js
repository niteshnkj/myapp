import React from "react";

const MenuCard = ({menuData}) => {
    return(
{menuData.map((curElem) =>{
    return(
        
    )})}
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Maggie</h2>
            <span className="card-desription subtle">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              deserunt, non libero amet nesciunt animi architecto nemo tenetur
              odio possimus repudiandae vero? Possimus fuga eligendi similique
              optio animi nihil ullam?
            </span>
            <div className="card-read">Read</div>
          </div>
          {/* <img src={image} alt="images" className="card-media" /> */}
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </>
  
  );
};

export default MenuCard;
