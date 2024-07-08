import React from "react";

const EventPolicies = () => {
  return (
    <div className="flex justify-center items-center p-20">
      <div className="flex justify-around flex-wrap policies-wrapper">
        <div className=" w-[40%]   flex flex-col gap-4 policies">
          <h2 className="font-semibold text-2xl text-[#8c52ff] ">
            {" "}
            Event Policies
          </h2>
          <h2>Age limit:</h2>
          <p>
            2+ years would require a ticket to enter the Dubai Opera Main
            Auditorium. Below 2+ years are not permitted into the Dubai Opera
            Main Auditorium.
          </p>
          <h2>Dress Code:</h2>
          <p>
            Dubai Opera is the ideal venue to celebrate elegance and style.
            Kindly avoid overly casual or provocative attire, such as shorts or
            flip-flops, to uphold our venue standards. Guests not complying with
            the dress code will not be permitted entry.
          </p>
        </div>

        <div className="w-[40%] flex flex-col gap-4 policies">
          <h2 className="font-semibold text-2xl text-[#8c52ff]">
            Terms and Conditions
          </h2>
          <ul>
            <li>
              This ticket is sold subject to these Ticketing Terms and
              Conditions (the “T&C”). The T&C should be read carefully before
              purchase and the purchase of Ticket(s) constitutes acceptance of
              the T&C.
              <li>This ticket must be produced to gain entry into an event.</li>
              <li>
                Removing any part of, altering or defacing the ticket may
                invalidate it.
              </li>
              <li>
                This ticket must not, without the prior written consent of Dubai
                Opera, be resold or used for advertising, promotion or other
                commercial purposes, if not the ticket will be cancelled
                immediately. This ticket is only valid for the specific date,
                time and event shown.
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventPolicies;
