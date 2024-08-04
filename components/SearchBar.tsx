"use client";
import React, { useState } from "react";
import Searchfood from "./SearchManufacturer";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-12 z-10 ${otherClasses} `}>
    <img
      src="search.svg"
      alt="Search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("Search triggered with name:", name); // Debugging line

    if (name.trim() === "") {
      alert("Please Fill in the Search Bar");
      return;
    }

    updateSearchParams(name);
  };

  const updateSearchParams = (name: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (name) {
      searchParams.set("name", name);
    } else {
      searchParams.delete("name");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Searchfood name={name} setName={setName} />
        <SearchButton otherClasses={"max-sm:hidden"} />
      </div>
    </form>
  );
};

export default SearchBar;
