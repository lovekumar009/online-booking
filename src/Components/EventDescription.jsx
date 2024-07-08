import React from "react";
import { CgMail } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const EventDescription = ({ isOpen, onClose, eventDetails }) => {
  console.log(eventDetails, "eventDetails");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-10 modal-bg ">
      <div className="bg-[#1919191] text-white rounded-lg   border border-[#9434e6] p-7 mob-modal">
        <h1 className="text-white text-center font-semibold pb-4 text-3xl">
          Event Details
        </h1>

        <button
          className=" px-4  text-3xl text-white rounded float-end"
          onClick={onClose}
        >
          <RxCross2 />
        </button>
        <h2 className=" mb-4 text-[#9434e6] font-bold text-3xl">
          {eventDetails.title}
        </h2>

        <div className="flex flex-col gap-8">
          <div className="text-white flex  flex-wrap justify-between">
            <div>
              {/* event orgainise date */}
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th class="px-4 py-2 text-left">Date</th>
                    <th class="px-4 py-2 text-left">Time</th>
                    <th class="px-4 py-2 text-left">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2">
                      {eventDetails.date}-{eventDetails.month}-
                      {eventDetails.year}
                    </td>
                    <td class="px-4 py-2">7:30 PM</td>
                    <td class="px-4 py-2">{eventDetails.location}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* buy now btn */}
            <div>
              <button className="border rounded text-sm px-2 py-[0.12rem] buynow-btn">
                Book Now
              </button>
            </div>
          </div>
          {/* description */}
          <div>
            <h4 className="text-lg font-medium">Description</h4>
            <div className="flex flex-col gap-5">
              <p className="leading-5 text-[#d1d0d0]">
                Prepare to be enchanted at the most anticipated event of the
                summer! Join us for an unforgettable evening at the luxurious
                Global-Hub Resort, where magic and elegance converge.
              </p>

              <p className="leading-5 text-[#d1d0d0]">
                As the sun sets on July 13, 2024, the gates of the stunning
                Global-Hub Resort will open at 7:30 PM to welcome you to an
                evening of unparalleled glamour and entertainment. Nestled
                amidst picturesque landscapes, this breathtaking venue is the
                perfect backdrop for a night of celebration and joy.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium">Performer</h4>
            <div className="flex flex-col gap-1">
              <h5 className="text-[#8c52ff] font-bold">DJ Stellar Beats</h5>
              <p>
                Renowned for creating electrifying atmospheres, DJ Stellar Beats
                will keep you dancing all night long with a mix of the hottest
                tracks and timeless classics.
              </p>
            </div>
          </div>

          {/* contact info  */}
          <div>
            <h4 className="text-lg font-medium">Contact Information</h4>
            <div className="flex flex-wrap  justify-between">
              <div>
                Dev Brinton :{" "}
                <span className="text-gray-500 text-sm">Event Organiser</span>
              </div>
              <div>
                <p className="flex items-center gap-1">
                  <CgMail /> rock@gmail.com
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1">
                  <IoMdCall />
                  +00 4567 3949 49
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
