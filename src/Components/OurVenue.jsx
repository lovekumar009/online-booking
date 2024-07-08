import React from "react";

const data = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/474x/36/cd/ce/36cdce4ff3d5aac3bd1795debb1eb6c5.jpg",
    cardtext: "Coca-Cola Arena",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/564x/a8/87/58/a887588027f00001ee2526ebc9dd536d.jpg",
    cardtext: "Burj- Al-Arab",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/474x/08/56/1b/08561b7adac63020cfd152454d51900f.jpg",
    cardtext: "Irish Village",
  },
];

const OurVenue = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-8 py-[2.125rem]">
      <div className="w-full flex items-center justify-center lg:justify-start">
        <p className="text-2xl font-bold text-[#8c52ff] heading-underline relative">Our Venue</p>
      </div>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((data) => (
          <div key={data.id} className="w-full h-fit lg:h-[12rem] rounded-[10px]">
            <div className="w-full h-full flex flex-col gap-2">
              <img
                className="w-full max-h-[12rem] h-full rounded-[10px] object-cover"
                src={data.image}
                alt=""
              />
              <div className="w-full flex flex-col gap-1  pl-2 ">
                <p className="font-semibold text-white">{data.cardtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVenue;
