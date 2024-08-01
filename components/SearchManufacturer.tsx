"use client";

import { SearchfoodProps } from "@/types";
import Image from "next/image";
import {
  Combobox,
  Transition,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import React from "react";
import { foods } from "@/constants";
import { useState, Fragment } from "react";

const Searchfood = ({
  food,
  setfood,
}: SearchfoodProps) => {
  const [query, setquery] = useState("");

  const filteredfoods =
    query === ""
      ? foods
      : foods.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt=""
              width={20}
              height={20}
              className="ml-4"
            ></Image>
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input "
            placeholder="Search..."
            displayValue={(food: string) => food}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition as={Fragment}>
            <ComboboxOptions>
              {filteredfoods.length == 0 && query != "" ? (
                <ComboboxOption
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create {query}
                </ComboboxOption>
              ) : (
                filteredfoods.map((item) => (
                  <ComboboxOption
                    value={item}
                    key={item}
                    className={({ active }) =>
                      `relative ${
                        active ? "bg-primary-blue text-black px-2 py-3" : "text-black px-2 py-3"
                      } `
                    }
                  >
                    {item}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Searchfood;
