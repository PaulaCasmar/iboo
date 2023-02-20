import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ModProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
  });

  const { productId } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const [categorias, setCategorias] = useState([]);
  const [errorM, setErrorM] = useState();
  const [successM, setSuccessM] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/product/${productId}`
      );
      console.log(response);
      setProduct(response.data.producto);
      setImage(response.data.producto.image);
    };
    getProduct();
  }, []);

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
        formData
      );

      console.log(response);
      setImage(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  // console.log(image)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  console.log(product);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/product/${productId}`,
        { ...product, image }
      );
      console.log(res.data);
      setSuccessM(res.data.message);
      setTimeout(() => {
        navigate(`/product/${productId}`);
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setErrorM(error.res.data.message);
      setTimeout(() => {
        navigate("/new_product");
      }, 2000);
    }
  };

  return (
    <div>
      <div className="get-in-touch">
        <p className="titleP">Modificar producto</p>

        <div>
          <form className="contact-form row" onSubmit={handleSubmit}>
            <div className="form-field col-lg-6">
              <input
                name="title"
                placeholder={product.title}
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
                placeholder={product.description}
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
                placeholder={product.price}
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
                placeholder={product.stock}
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
              Modificar
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
export default ModProduct;
