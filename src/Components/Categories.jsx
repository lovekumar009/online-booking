import React from "react";

const data = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/474x/95/7f/48/957f4829e705c70106aeabad211bc21f.jpg",
    categories: "Brunches",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/474x/57/cb/34/57cb340351f18fcb9eafc3cf47789d2c.jpg",
    categories: "Concert",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/564x/52/92/5c/52925c1c6be455b31909c045fcd34810.jpg",
    categories: "Nightlife",
  },
  {
    id: "4",
    image:
      "https://i.pinimg.com/564x/98/05/7b/98057b71ff12e70b74180f205c25eccf.jpg",
    categories: "Outdoor Attraction",
  },
  {
    id: "5",
    image:
      "https://i.pinimg.com/564x/4c/4a/a9/4c4aa994550fed92b5fffed42c9e176b.jpg",
    categories: "Comedy Events",
  },
  {
    id: "6",
    image:
      "https://i.pinimg.com/474x/05/de/17/05de17c997f17d7095877fe6bc8ed5de.jpg",
    categories: "Festival",
  },
  {
    id: "7",
    image:
      "https://i.pinimg.com/474x/7e/72/14/7e7214bf5a4e75c0461bcc1301ad12f0.jpg",
    categories: "Sports Festival",
  },
];

const Categories = () => {
  return (
    <div className="w-full flex flex-col gap-8 py-[2.125rem]">
      <div className="w-full h-fit flex items-center justify-center lg:justify-start">
        <p className="text-2xl font-bold text-[#8c52ff] heading-underline relative">
          Categories{" "}
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

export default Categories;
