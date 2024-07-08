import React from 'react'
import { SlArrowDown } from 'react-icons/sl';

const data = [
  {
    id: "1",
    category: "Music Concert",
  },
  {
    id: "2",
    category: "Tech Conference",
  },
  {
    id: "3",
    category: "Food Festival",
  },
  {
    id: "4",
    category: "Art Exhibition",
  },
  {
    id: "5",
    category: "Fashion Show",
  },
  {
    id: "6",
    category: "Business Summit",
  },
  {
    id: "7",
    category: "Marathon",
  },
  {
    id: "8",
    category: "Healthcare Conference",
  },
  {
    id: "9",
    category: "Film Festival",
  },
  {
    id: "10",
    category: "Sports Event",
  },
  {
    id: "11",
    category: "Theater Play",
  },
  {
    id: "12",
    category: "Comedy Show",
  },
  {
    id: "13",
    category: "Workshop",
  },
  {
    id: "14",
    category: "Webinar",
  },
  {
    id: "15",
    category: "Charity Event",
  },
  {
    id: "16",
    category: "Dubai Desert Safari",
  },
  {
    id: "17",
    category: "Arabian Nights Cultural Show",
  },
  {
    id: "18",
    category: "Camel Racing",
  },
  {
    id: "19",
    category: "Dubai Shopping Festival",
  },
  {
    id: "20",
    category: "Dhow Cruise Dinner",
  },
  {
    id: "21",
    category: "Falconry Experience",
  },
  {
    id: "22",
    category: "Dubai International Boat Show",
  },
  {
    id: "23",
    category: "Heritage Village Tour",
  },
  {
    id: "24",
    category: "Dubai Opera Performance",
  },
  {
    id: "25",
    category: "Dubai Food Festival",
  },
  {
    id: "26",
    category: "Arabic Calligraphy Workshop",
  },
  {
    id: "27",
    category: "Eid Celebrations",
  },
  {
    id: "28",
    category: "Dubai World Cup (Horse Racing)",
  },
  {
    id: "29",
    category: "Dubai Jazz Festival",
  },
  {
    id: "30",
    category: "Traditional Souk Tour",
  }
];

const OtherCategories = () => {
    return (
      <div className="w-full h-fit flex flex-col gap-8 py-[2.125rem]">
        <div className="w-full flex items-center justify-center lg:justify-between ">
          <p className="text-2xl font-bold text-[#8c52ff] text-center lg:text-left heading-underline capitalize relative">other Categories</p>
        </div>
        <div className="w-full h-fit flex flex-wrap gap-4">
          {data.map((data) => (
            <button key={data.id} className="w-fit h-fit py-1 px-3  rounded-full shadow-sm shadow-[#8c52ff]">
              <span className='text-white'>{data.category}</span>
            </button>
          ))}
        </div>
      </div>
    );
}

export default OtherCategories
