import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
import React from "react";

const EventCategory = async () => {
  const events = await getAllEvents({
    query: '',
    category: '',
    page: 1,
    limit: 6
  })

  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12" id="events">
      <h2 className="h2-bold">
        Trusted <span className="text-[#705CF7]">by</span>
        <br />
        <span className="text-[#705CF7]">Thousands</span> of Events
      </h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search CategoryFilter
      </div>

      <Collection
        data={events?.data}
        emptyTitle="No Events Found"
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={6}
        page={1}
        totalPages={2}
      />
    </section>
  );
};

export default EventCategory;
