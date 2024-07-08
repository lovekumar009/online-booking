import React from "react";

const data = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/564x/f5/f3/08/f5f3085153f2f36a2faef33577277879.jpg",
    cardtext: "International Art Fair Dubai",
    eventTime: "10:00 AM - 6:00 PM",
    eventDuration: "August 15, 2024",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/564x/80/84/d0/8084d02e032e956b68defc72e35ea7f4.jpg",
    cardtext: " Arabian Nights Fashion Show",
    eventTime: "4:00 PM - 11:00 PM",
    eventDuration: "September 10, 2024",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/564x/69/18/ed/6918ed35622eb599671502f3e5b0ff3e.jpg",
    cardtext: "Global Business Summit",
    eventTime: "12:00 PM - 10:00 PM",
    eventDuration: "October 5, 2024",
  },
];

const EventGrid = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-8 py-[2.125rem]">
      <div className="w-full flex items-center justify-center lg:justify-start">
        <p className="text-2xl font-bold text-[#8c52ff] heading-underline relative">Events Today</p>
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
                <p className="text-sm text-[#D3D3D3]">{data.eventTime}</p>
                <p className="text-xs text-[#C0C0C0]">{data.eventDuration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
