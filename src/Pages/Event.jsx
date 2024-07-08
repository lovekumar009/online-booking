import React from "react";
import OurTour from "../Components/OurTour";
import UpcomingEvents from "../Components/UpcomingEvents";
import EventPolicies from "../Components/EventPolicies";
import HeroSection from "../Components/HeroSection";

export default function Event() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <OurTour />
      </div>
      <div>
        <UpcomingEvents />
      </div>
      <div>
        <EventPolicies />
      </div>
    </div>
  );
}
