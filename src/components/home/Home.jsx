import { useState } from "react";
import FilterForm from "./FilterForm/FilterForm";
import Results from "./Results/Results";
import { list } from "../data/Data";
import dayjs from "dayjs";

// setting up dayjs so that we can comopare dates
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);

const Home = () => {
  const [allFilters, setAllFilters] = useState({
    location: "",
    property: "",
    price: "",
    date: "",
  });
  // sets allFilters
  const applyFilters = (filters) => {
    setAllFilters(filters);
  };

  // initally put all list data in filteredList
  let filteredList = list;
  // filter the list according to set filters
  for (const filter in allFilters) {
    // filter = location
    if (filter === "location" && allFilters[filter] !== "") {
      filteredList = filteredList.filter((item) => {
        if (
          item.location
            .toLowerCase()
            .includes(allFilters.location.toLowerCase())
        ) {
          return item;
        }
      });
    }

    // filter = property

    if (
      filter === "property" &&
      allFilters[filter] !== "" &&
      allFilters[filter] !== "All"
    ) {
      filteredList = filteredList.filter((item) => {
        return item.type === allFilters.property;
      });
    }

    // filter = date

    if (filter === "date" && allFilters[filter] !== "") {
      filteredList = filteredList.filter((item) => {
        if (dayjs(item.date).isSameOrAfter(dayjs(allFilters.date))) {
          return item;
        }
      });
    }

    // filter = price

    if (
      filter === "price" &&
      allFilters[filter] !== "" &&
      allFilters[filter] !== "All"
    ) {
      const prices = allFilters[filter].split("-");
      const from = Number(prices[0]);
      const to = Number(prices[1]);
      filteredList = filteredList.filter((item) => {
        let price = item.price.replace("$", "").replace(",", "");
        const amount = Number(price);
        if (from < amount && amount <= to) {
          return item;
        }
      });
    }
  }

  return (
    <>
      <FilterForm onApplyFilters={applyFilters} />
      <Results newList={filteredList} />
    </>
  );
};

export default Home;
