"use client"
import React from "react";
import Searchfood from "./SearchManufacturer";
import { useState } from "react";
import { foods } from "@/constants";


const SearchBar = () => {
  const [food,setfood] = useState('')
  const handleSearch = () => {};
  return <form className="searchbar" onSubmit={handleSearch}>
    <div className="searchbar__item">
      <Searchfood 
      food = {food}
      setfood = {setfood}
      />
    </div>
  </form>;
};

export default SearchBar;
