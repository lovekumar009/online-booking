import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const data = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/564x/aa/e2/cd/aae2cdfccbc9fbc9531e157e78c372d6.jpg",
    categories: "Soulja",
    followers: "500 followers",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/736x/49/4a/48/494a485521d277bb321798dacfec4d20.jpg",
    categories: "Falguni Pathak",
    followers: "50 followers",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/564x/b6/43/a5/b643a54cc637563265ce94a9d62e349e.jpg",
    categories: "A.R. Rahman",
    followers: "50 followers",
  },
  {
    id: "4",
    image:
      "https://i.pinimg.com/564x/4b/7b/c9/4b7bc96c63cb960f1ae5eaac08cec28f.jpg",
    categories: "Ed Sheeran",
    followers: "59 followers",
  },
  {
    id: "5",
    image:
      "https://i.pinimg.com/564x/63/6d/b3/636db391a1f8f20e9ee9ba9029930f9a.jpg",
    categories: "Daljeet Dosanjh",
    followers: "508 followers",
  },
  {
    id: "6",
    image:
      "https://i.pinimg.com/564x/d4/b5/45/d4b5459ec03122e85305ab8165843af9.jpg",
    categories: "Ariana Grande",
    followers: "700 followers",
  },
  {
    id: "7",
    image:
      "https://i.pinimg.com/564x/f8/b7/0a/f8b70afb222ac0b25080618a64ad439f.jpg",
    categories: "Mohit Chauhan",
    followers: "700 followers",
  },
];

const Artists = () => {
  return (
    <div className="w-full flex flex-col gap-8 py-[2.125rem]">
      <div className="w-full h-fit flex items-center justify-center lg:justify-start">
        <p className="text-2xl font-bold text-[#8c52ff] heading-underline relative">
          Popular Artists{" "}
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
              <div className="W-full text-center flex flex-col items-cneter justify-center">
                <p className="text-[#D3D3D3] font-semibold">
                  {data.categories}
                </p>
                <p className="text-[#D3D3D3]">{data.followers}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
