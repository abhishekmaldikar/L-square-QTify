import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const Filters = ({ getGenres, data }) => {
  const [filterData, setFilterData] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");

  useEffect(() => {
    async function helper() {
      let data = await getGenres();
      setFilterData(data.data);
    }
    helper();
  }, [getGenres]);

  function handleChange(selectedGenreKey) {
    if (selectedGenreKey === "all") {
      setGenre(data);
    } else {
      let newdata = data.filter((ele) => ele.genre.key === selectedGenreKey);
      setGenre(newdata);
    }
    setSelectedValue(selectedGenreKey);
  }

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            onChange={(e, newValue) => handleChange(newValue)}
            aria-label="songs filter Tabs"
            value={selectedValue}
            sx={{ marginBottom: "2rem" }}
          >
            <Tab sx={{ color: "white" }} label="All" value="all" />
            {filterData.map((ele) => (
              <Tab
                key={ele.key}
                sx={{ color: "white" }}
                label={ele.label}
                value={ele.key}
              />
            ))}
          </Tabs>
        </Box>
        {genre.length ? <Carousel data={genre} /> : <Carousel data={data} />}
      </Box>
    </div>
  );
};

export default Filters;
