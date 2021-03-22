import React, { useState } from "react";
import Form from "./components/Form";
import PhotoGallery from "./components/PhotoGallery";
import axios from "axios";
const API_URL = "https://shibe-photos.herokuapp.com/shibe-photos";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [inputValue, setInputValue] = useState(1);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${API_URL}/${inputValue}`);
      setPhotos(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form
        submitHandler={submitHandler}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <PhotoGallery photos={photos} setPhotos={setPhotos} />
    </>
  );
};

export default App;
