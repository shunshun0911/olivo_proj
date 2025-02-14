import React from "react";
const Header = () => {
  return (
    <div
      className="h-[34vw] my-8 mx-auto bg-[url('/header_img.png')] 
    bg-no-repeat bg-contain relative "
    >
      <div
        className="absolute flex flex-col items-start gap-[1.5vw] 
      max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn"
      >
        <h2 className="font-medium text-white text-[max(4.5vw,22px)]">
          Order your favorite food here
        </h2>
        <p className="text-white text-[1vw]">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button
          className="border-none font-medium text-[#747474]
        py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
