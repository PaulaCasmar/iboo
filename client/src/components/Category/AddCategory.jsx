import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState({
    title: "",
  });

  const [image, setImage] = useState({});
  const [errorM, setErrorM] = useState(null);
  const [successM, setSuccessM] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];
      if (!file) return alert("No se ha subido la imagen");

      let formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      setImage(response.data);
      setSuccessM(response.data.message);
    } catch (error) {
      console.log(error.response);
      setErrorM(error.response.data.message);
    }
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/category", {
        ...category,
        image,
      });
      console.log(res);
      setSuccessM(res.data.message);
      setTimeout(() => {
        window.location.href = "/new_category";
      }, 3000);
    } catch (error) {
      setErrorM(error.res.data.message);
      setTimeout(() => {
        window.location.href = "/new_category";
      }, 2000);
    }
  };

  return (
    <div>
      <div className="get-in-touch">
        <p className="titleP">Añadir categoria</p>
        <div>
          <form className="contact-form row" onSubmit={handleSubmit}>
            <div className="form-field col-lg-6">
              <input
                name="title"
                value={category.title}
                type="text"
                className="input-text js-input"
                id="titleInput"
                onChange={handleChange}
              />
              <p className="label">Nombre</p>
            </div>
           
                        
            <div>
              <input
                type="file"
                name="file"
                onChange={handleUpload}
                className="fotoP"
              />
              <img src={image.url} className="PhotoP" />
            </div>
            <button type="submit" className="btnAP">
              Add
            </button>
            <div
              className="alert alert-primary"
              role="alert"
              style={{ display: successM ? "block" : "none" }}
            >
              {successM}
            </div>
            <div
              className="alert alert-danger"
              role="alert"
              style={{ display: errorM ? "block" : "none" }}
            >
              {errorM}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
