import React from "react";

const AddBanner = () => {
  return (
    <div className="w-full hidden lg:flex items-center justify-center py-[3.25rem]">
      <div className="w-full h-full lg:h-[12.813rem] flex rounded-[20px]">
        <img
          className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-[25deg] transition-all lg:rounded-[20px]"
          src=" https://cdn.platinumlist.net/upload/banner/10995_bth2024_horizontal_banner_desktop_sat_20-0-en1720422207.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AddBanner;
