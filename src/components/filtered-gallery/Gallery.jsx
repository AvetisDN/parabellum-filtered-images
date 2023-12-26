import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = ({ filteredImages }) => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-14">
      {filteredImages?.map((item, index) => (
        <GalleryItem image={item} index={index} key={item.id} />
      ))}
    </div>
  );
};

export default Gallery;
