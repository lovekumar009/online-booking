import React from "react";
import { SlArrowDown } from "react-icons/sl";
import AddBanner from "../Components/AddBanner";
import ShowAllGrid from "../Components/ShowAllGrid";
import Categories from "../Components/Categories";
import EventGrid from "../Components/EventGrid";
import OtherCategories from "../Components/OtherCategories";
import EventGrid2 from "../Components/EventGrid2";
import ShowAllGrid2 from "../Components/ShowAllGrid2";
import AddBanner2 from "../Components/AddBanner2";
import Artists from "../Components/Artists";
import HeroSection from "../Components/HeroSection";
import OurVenue from "../Components/OurVenue";
import NearbyCities from "../Components/NearbyCities";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="w-full h-full px-6 lg:px-[8.25rem] flex flex-col gap-8 pb-[5rem] bg-[#191919]">
        <EventGrid />
        <ShowAllGrid />
        <AddBanner />
        <ShowAllGrid2 />
        <EventGrid2 />
        <Categories />
        <Artists />
        <AddBanner2 />
        <OurVenue/>
        <NearbyCities/>
        <OtherCategories />
      </div>
    </div>
  );
}
