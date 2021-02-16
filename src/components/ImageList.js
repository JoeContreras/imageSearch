import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.debug("este es un mensaje en debug");
  console.warn("este es un mensaje de aviso");
  console.error("este es un mensaje de error");
  console.info("este es un mensaje de informacion");
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
