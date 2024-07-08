import React from "react";
import { SlArrowDown } from "react-icons/sl";

const data = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/564x/91/6f/e2/916fe2df992983b5d6bf7a3c21412e17.jpg",
    cardtext: "Dubai Tech Expo",
    eventprice: "$ 20",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/736x/75/fe/99/75fe99b62ade42b78879593416772b69.jpg",
    cardtext: " Desert Music Festival",
    eventprice: "$ 40",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/564x/c9/9a/86/c99a86ae666fca796afdd058303e7195.jpg",
    cardtext: "Dubai Food & Wine Festival",
    eventprice: "$ 20",
  },
];

const ShowAllGrid = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-8 py-[2.125rem]">
      <div className="w-full flex items-center justify-center lg:justify-between ">
        <p className="text-2xl font-bold text-[#8c52ff] text-center lg:text-left heading-underline relative">Top Events</p>
        <div className="w-fit h-fit hidden lg:flex items-center justify-center">
          <button className="text-xl font-bold hover:underline text-[#D3D3D3]">
            {" "}
            Show all{" "}
            <span className="inline-flex pl-[2px]">
              <SlArrowDown className="h-3 w-3 fill-slate-100 -rotate-90" />
            </span>
          </button>
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((data) => (
          <div key={data.id} className="w-full h-fit rounded-[10px]">
            <div className="w-full h-full flex flex-col gap-2">
              <img
                className="w-full h-full max-h-[12rem] rounded-[10px] 0object-cover"
                src={data.image}
                alt=""
              />
              <div className="w-full flex flex-col gap-1 pl-2 ">
                <p className="font-semibold text-white">{data.cardtext}</p>
                <p className="text-sm text-[#D3D3D3]">{data.eventprice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllGrid;
