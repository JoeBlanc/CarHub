import { Hero, SearchBar } from "@/components"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className=" mt-12 sm:px-16 px-6 py-4 max-x-[1440px] mx-auto" id="discover">
        <div className="flex flex-col justify-start items-start gap-3 text-black-100 ">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you will like</p>
        </div>
        
        <div className="home__filters">
          <SearchBar />
          <div className="home__filters-container">
            
          </div>
        </div>
      </div>
    </main>
  )
}
