import Search from "@/components/shared/Search";
import Hero from "../hero/page";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category: category,
    page: page,
    limit: 6,
  });
  return (
    <main className="">
      <Hero />

      <div className=" w-full font-bold text-center text-xl md:text-4xl mt-7  gap-5 md:flex-row">
        Search and filter Categories
      </div>
      <Search />
      <CategoryFilter />
      <section
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
        id="events"
      >
        <h2 className="h2-bold text-center">
          Trusted <span className="text-[#705CF7]">by</span>
          <br />
          <span className="text-[#705CF7]">Thousands</span> of Events
        </h2>

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
    </main>
  );
}
