import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="flex flex-col gap-5">
      <h1 className="text-[#262626] font-medium text-4xl">Explore our Menu</h1>
      <p className="max-w-[60%]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className=" flex content-between items-center gap-8 text-center my-5 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
            >
              <img
                src={item.menu_image}
                alt=""
                className={`${
                  category === item.menu_name
                    ? "border-4 border-tomato p-0.5 "
                    : ""
                }w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200`}
              />
              <p className="mt-2.5 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer bg-red-50">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2.5 mx-0 h-0.5 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
