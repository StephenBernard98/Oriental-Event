import React from "react";

const EventCategory = () => {
  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12" id="events">
      <h2 className="h2-bold">
        Trusted <span className="text-[#705CF7]">by</span>
        <br />
        <span className="text-[#705CF7]">Thousands</span> of Events
      </h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search
        CategoryFilter
      </div>
    </section>
  );
};

export default EventCategory;
