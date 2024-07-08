import React from "react";
import "../App.css";

const UpcomingEvents = () => {
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/474x/ac/92/47/ac92473b28aa90b1f8f5cdd1807583f2.jpg",
      date: "2 Aug 2024",
      location: "Mumbai , India",
      description:
        "Join us for an unforgettable night . Get ready to make memories that will last a lifetime. Don't miss out on the event of the year! 🌟💃🕺✨",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/474x/80/b2/4a/80b24a79025b933949f453004a89b32a.jpg",
      date: "10 Aug 2024",
      location: "Goa , India",
      description:
        "Join us for an unforgettable night . Get ready to make memories that will last a lifetime. Don't miss out on the event of the year! 🌟💃🕺✨",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/474x/f2/32/c5/f232c512e490f327314fdfdb56d729c8.jpg",
      date: "12 Sept 2024",
      location: "Delhi , India",
      description:
        "Join us for an unforgettable night . Get ready to make memories that will last a lifetime. Don't miss out on the event of the year! 🌟💃🕺✨",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/474x/54/0d/d1/540dd1107acfcee0212822422ac7e79f.jpg",
      date: " 15 Sept 2024 ",
      location: "California , USA ",
      description:
        "Join us for an unforgettable night . Get ready to make memories that will last a lifetime. Don't miss out on the event of the year! 🌟💃🕺✨",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/474x/50/74/6c/50746c7eb223b8391d53ef411095d6db.jpg",
      date: "30 Sept",
      location: "Florida , USA",
      description:
        "Join us for an unforgettable night . Get ready to make memories that will last a lifetime. Don't miss out on the event of the year! 🌟💃🕺✨",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="">
        <div class="heading-effect ">Upcoming Events</div>
      </div>
      <div className="flex justify-center ">
        <div class="flex justify-center flex-wrap w-[80vw] gap-8 py-8">
          {data.map((data) => (
            <div className="" key={data.id}>
              <img src={data.img} alt="Avatar" class="image" />
              <div class="overlay">
                <div class="text">
                  <p>{data.description}</p>
                </div>
              </div>
              <div className="flex justify-between bg-[#8c52ff] p-3">
                <h4 className="font-bold">{data.location}</h4>
                <h4>{data.date}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
