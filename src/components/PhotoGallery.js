import React from "react";

const PhotoGallery = ({ photos }) => {
  return (
    <ul className={photos.length ? "photoGallery" : ""}>
      {photos.length
        ? photos.map((photo, index) => (
            <img key={index} src={photo} alt="shibe photo" className="photo" />
          ))
        : null}
    </ul>
  );
};
export default PhotoGallery;
