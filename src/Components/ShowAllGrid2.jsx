import React from "react";
import { SlArrowDown } from "react-icons/sl";

const data = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/564x/10/aa/b7/10aab79b68fc0b4a6d3cdc27cdd1c20f.jpg",
    cardtext: "Dubai Miracle Garden",
    eventprice: "$ 20",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/474x/37/21/e2/3721e21b8b37b93be169c5a7b17b10ee.jpg",
    cardtext: "Ski Dubai",
    eventprice: "$ 99.90",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/736x/ed/5b/1b/ed5b1b0779e6aa03e37d9ed0ead36e00.jpg",
    cardtext: "Dubai Shopping Festival (DSF)",
    eventprice: "$ 88.89",
  },
  {
    id: "4",
    image:
      "https://i.pinimg.com/564x/a4/60/81/a460819da3fccc1d73d2d29c347e5f8e.jpg",
    cardtext: "Al-Barari-Playground",
    eventprice: "$ 88.89",
  },
  {
    id: "5",
    image:
      "https://i.pinimg.com/564x/5e/49/d1/5e49d135843c05246a82ee3fe5fc5bc6.jpg",
    cardtext: "Dolphin Show",
    eventprice: "$ 88.89",
  },
  {
    id: "6",
    image:
      "https://i.pinimg.com/564x/79/43/15/79431533be63e065bbdf04bcc35ea053.jpg",
    cardtext: "Museum Of The Future ",
    eventprice: "$ 88.89",
  },
];

const ShowAllGrid2 = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-8 py-[2.125rem]">
      <div className="w-full flex items-center justify-center lg:justify-between ">
        <p className="text-2xl font-bold text-[#8c52ff] text-center lg:text-left heading-underline relative">Top Attraction and Experiences</p>
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

export default ShowAllGrid2;
