import { adminAssets } from "../../assets/admin_assets/assets";
import { frontendAssets } from "../../assets/frontend_assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const nav = ["home", "menu", "mobile-app", "contact us"];
  return (
    <div className="py-5 flex justify-between items-center">
      <img src={frontendAssets.logo} alt="logo" className="w-[150px]" />

      <ul className="flex gap-5 text-[#49557e] text-lg">
        {nav.map((item) => (
          <li
            key={item}
            className={`pb-[2px] border-b-2 transition duration-300 cursor-pointer ${
              active === item ? "border-[#49557e]" : "border-transparent"
            }`}
            onClick={() => setActive(item)}
          ></li>
        ))}
      </ul>
      <ul className="flex gap-5 text-[#49557e] text-lg">
        {nav.map((item) => (
          <li
            key={item}
            className={`pb-[2px] border-b-2 transition duration-300 cursor-pointer ${
              active === item ? "border-[#49557e]" : "border-transparent"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-10 object-contain">
        <img src={frontendAssets.search_icon} alt="search-icon" />
        <div className="relative">
          <img src={frontendAssets.basket_icon} alt="" />
          <div
            className="absolute min-w-[10px] min-h-[10px] bg-tomato 
          rounded-md -top-2 -right-2"
          ></div>
        </div>
        <button
          className="bg-transparent text-base text-[$49557e]
          border border-tomato py-2.5 px-[30px] rounded-[50px] cursor-pointer
          hover:bg-[#fff4f2] transition duration-300 ease-in-out"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
