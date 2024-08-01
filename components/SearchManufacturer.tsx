"use client";

import { SearchManufacturerProps } from "@/types";
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
import { manufacturers } from "@/constants";
import { useState, Fragment } from "react";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setquery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
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
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition as={Fragment}>
            <ComboboxOptions>
              {filteredManufacturers.length == 0 && query != "" ? (
                <ComboboxOption
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </ComboboxOption>
              ) : (
                filteredManufacturers.map((item) => (
                  <ComboboxOption
                    value={item}
                    key={item}
                    className={({ active }) =>
                      `relative ${
                        active ? "bg-primary-blue text-white px-2 py-3" : "text-gray-900 px-2 py-3"
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

export default SearchManufacturer;
