import React from "react";

const data = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/564x/e9/0c/0a/e90c0ac86620289033b24e3b9daf56e5.jpg",
    categories: "Sharjah",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/564x/cc/43/25/cc43255af1443806c4b3c74ca273e519.jpg",
    categories: "UAQ",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/474x/15/b6/7d/15b67dd0563ca8ae0f7b8c6647ba03a3.jpg",
    categories: "RAK",
  },
  {
    id: "4",
    image:
      "https://i.pinimg.com/564x/99/c9/40/99c940537addc1c9d027f2db510b35f0.jpg",
    categories: "Fujairah",
  },
  {
    id: "5",
    image:
      "https://i.pinimg.com/564x/94/23/e3/9423e32bdbb3b4edd19d4f8368ddb36b.jpg",
    categories: "Abu Dhabi",
  },
  {
    id: "6",
    image:
      "https://i.pinimg.com/736x/83/18/4b/83184b9f4dfdcc58b8cc3c8508695be2.jpg",
    categories: "Al-Ain",
  },
  {
    id: "7",
    image:
      "https://i.pinimg.com/736x/4d/7e/8c/4d7e8c598b56febba9cc979d5b2f6a19.jpg",
    categories: "Kalba",
  },
];

const NearbyCities = () => {
  return (
    <div className="w-full flex flex-col gap-8 py-[2.125rem]">
      <div className="w-full h-fit flex items-center justify-center lg:justify-start">
        <p className="text-2xl font-bold text-[#8c52ff] heading-underline relative">
          Nearby Cities with Events{" "}
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-fit h-fit grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {data.map((data) => (
            <div className="w-fit h-fit flex flex-col gap-2">
              <div key={data.id} className="w-fit h-fit rounded-full">
                <img
                  className="w-[9.6rem] h-[9.6rem] rounded-full"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="W-full text-center flex items-cneter justify-center">
                <p className="text-[#D3D3D3] font-semibold">
                  {data.categories}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyCities;
