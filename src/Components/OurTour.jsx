import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import Slider from "./Slider";
import EventDescription from "./EventDescription";

const OurTour = ({ item, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState(null);

  const handleTitleClick = (detail) => {
    setEventDetails(detail); // Set the event details based on the clicked item
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setEventDetails(null); // Clear the event details
  };
  const data = [
    {
      id: 1,
      date: "13",
      month: "july",
      year: "2024",
      location: "New York",
      title: "Rock the show",
    },
    {
      id: 2,
      date: "16",
      month: "july",
      year: "2024",
      location: "Los Angeles",
      title: "Music and art festival ",
    },
    {
      id: 3,
      date: "20",
      month: "july",
      year: "2024",
      location: "Chicago",
      title: "Rock in Rio Art festival",
    },
    {
      id: 4,
      date: "25",
      month: "july",
      year: "2024",
      location: "Houston",
      title: "High base Concert",
    },
    {
      id: 5,
      date: "30",
      month: "july",
      year: "2024",
      location: "Phoenix",
      title: "Deep thoughts Night",
    },
  ];

  const images = [
    "https://i.pinimg.com/564x/0c/69/45/0c694514bf1e17b57a370ee22f22637a.jpg",
    "https://i.pinimg.com/474x/35/c0/9b/35c09be4abfdfbc18b8bd1796d615763.jpg",
    "https://i.pinimg.com/474x/d3/0d/e7/d30de753f729e4963e4622a41f57357d.jpg",
    "https://i.pinimg.com/474x/30/67/6e/30676ec1a29003c495e04442b91dcbdb.jpg",
    "https://i.pinimg.com/564x/b4/e3/5e/b4e35e4b926094005f0267c3a2689800.jpg",
  ];

  return (
    <div className="text-white p-20 flex flex-col justify-center items-center">
      <div className="heading-effect">Our Tour </div>
      <div className=" flex gap-7 flex-wrap-reverse justify-center py-8 ">
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center gap-4 "
            >
              <div className=" border  border-[#8c52ff] rounded-full w-24 h-24   flex justify-center items-center p-[2.33rem] hover:bg-[#9434e6] hover:border-[#9434e6] text-white font-bold ">
                <h3 className="uppercase font-extrabold  text-center text-base leading-4 gap-1 ">
                  {item.date} <span className="text-white">{item.month}</span>{" "}
                  <br />
                  <span className="font-black text-white">{item.year}</span>
                </h3>
              </div>
              <div className="w-full flex ">
                <div className="w-full">
                  <h3 className=" text-2xl font-semibold hover:underline ">
                    {item.title}
                  </h3>
                  <EventDescription
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    eventDetails={eventDetails}
                  />
                  <div className="flex justify-between">
                    <span className="text-white text-base flex items-center">
                      <CiLocationOn /> {item.location}
                    </span>
                    <button
                      className="border rounded text-sm px-2 py-[0.12rem] buynow-btn"
                      onClick={() => handleTitleClick(item)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <br />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Slider images={images} interval={3000} />
        </div>
      </div>
    </div>
  );
};

export default OurTour;
