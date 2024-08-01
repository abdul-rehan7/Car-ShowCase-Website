import Image from "next/image";
import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Food Catalogue</h1>
          <p>Search the Meal You want to Grab</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
