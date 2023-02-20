import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
  });
  const [image, setImage] = useState({});
  const [categorias, setCategorias] = useState([]);
  const [errorM, setErrorM] = useState();
  const [successM, setSuccessM] = useState();

  useEffect(() => {
    const getCategory = async () => {
      const resC = await axios.get("http://localhost:5000/api/categories");
      // console.log(resC);
      setCategorias(resC.data.categorias);
    };
    getCategory();
  }, []);

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
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  console.log(product);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/product", {
        ...product,
        image,
      });
      console.log(res.data);
      setSuccessM(res.data.message);
      setTimeout(() => {
        window.location.href = "/new_product";
      }, 2000);
    } catch (error) {
      console.log(error.response);
      // setErrorM(error.res.data.message);
      setTimeout(() => {
        navigate("/new_product");
      }, 2000);
    }
  };

  return (
    <div className="fondo1">
      <div className="get-in-touch">
        <p className="titleP">Añadir producto</p>
        <div>
          <form className="contact-form row" onSubmit={handleSubmit}>
            <div className="form-field col-lg-6">
              <input
                name="title"
                value={product.title}
                type="text"
                className="input-text js-input"
                id="titleInput"
                onChange={handleChange}
              />
              <p className="label">Nombre</p>
            </div>
            <div className="form-field col-lg-6">
              <input
                name="description"
                value={product.description}
                type="text"
                className="input-text js-input"
                id="descriptionInput"
                onChange={handleChange}
              />
              <p className="label">Descripción</p>
            </div>
            <div className="form-field col-lg-6">
              <input
                name="price"
                value={product.price}
                type="text"
                className="input-text js-input"
                id="priceInput"
                onChange={handleChange}
              />
              <p className="label">Precio</p>
            </div>
            <div className="form-field col-lg-6">
              <input
                name="stock"
                value={product.stock}
                type="text"
                className="input-text js-input"
                id="stockInput"
                onChange={handleChange}
              />
              <p className="label">Stock</p>
            </div>
            <div>
              <select
                className="form-select"
                name="categoryId"
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option selected>Categoria</option>
                {categorias.map((e) => (
                  <option key={e._id} value={e._id}>
                    {e.title}
                  </option>
                ))}
              </select>
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

export default AddProduct;
