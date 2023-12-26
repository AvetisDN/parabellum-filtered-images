import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Gallery from "./Gallery";
import { categories, images } from "./imagesData";
import { motion } from "framer-motion";

const FilteredGallery = () => {
  const [filteredImages, setFilteredImages] = useState(null);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    setFilteredImages(images);
  }, []);

  const switchFilter = (categoryId) => {
    setFilter(categoryId);
    if (categoryId !== 0) {
      setFilteredImages(
        images.filter((item) => item.categoryId === categoryId)
      );
    } else {
      setFilteredImages(images);
    }
  };

  return (
    <motion.div
      className="min-h-screen max-w-7xl mx-auto py-10"
      initial={{ opacity: 0, transform: "translateY(100px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ margin: "-200px 0px", once: true }}
    >
      <h2 className="font-title font-bold text-5xl text-center mb-20">
        Gallery Title
      </h2>
      <Filters
        categories={categories}
        filter={filter}
        switchFilter={switchFilter}
      />
      <Gallery filteredImages={filteredImages} />
    </motion.div>
  );
};

export default FilteredGallery;
