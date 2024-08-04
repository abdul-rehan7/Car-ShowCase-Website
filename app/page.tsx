import Hero from "@/components/Hero";
import { fetchFoods } from "@/utils";
import CarCard from "@/components/ThreeDCard";

export default async function Home() {
  const allFoods = await fetchFoods();

  const isDataEmpty = !Array.isArray(allFoods) || !allFoods;

  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Food Catalogue</h1>
          <p>Search the Meal You want to Grab</p>
        </div>
    
        {!isDataEmpty ? (
          <section className="text-white">
            <div className="home__foods-wrapper">
              {allFoods.slice(0, 8).map((food) => (
                <CarCard key={food.id} food={food} />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <h2>OOPS, No Results</h2>
            <p></p>
          </div>
        )}
      </div>
    </main>
  );
}
