import React from "react";
import { motion } from "framer-motion";

const GalleryItem = ({ image, index }) => {
  return (
    <motion.div
      className=" aspect-square"
      initial={{
        opacity: 0,
        transform: "translateY(50px)",
      }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      transition={{ delay: index * 0.1 }}
      viewport={{ margin: "-100px 0px", once: true }}
    >
      <img
        src={image.image}
        className="w-full h-full object-cover object-center"
      />
    </motion.div>
  );
};

export default GalleryItem;
