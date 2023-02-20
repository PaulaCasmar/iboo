import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";



const Product = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState({});


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

  const deleteProduct = async (e) => {
    e.preventDefault();
    let option = window.confirm("¿Seguro que quieres borrar el producto?");
    if (option == true) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/product/${productId}`,

        );
        console.log(response);
        setTimeout(() => {
          navigate("/products");
        }, 2000);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <div>
      <p className="titleP">Productos / {product.title}</p>

      <div className="products">
        <div className="CardP">
          <div className="cards">
            <img
              className="card-img-top1"
              src={image.url}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}€</p>
              <p className="card-text">{product.price}€</p>
              <p className="card-text">Stock:{product.stock}</p>

            </div>
            <div className="card-footer">
              <small className="text-muted">ID: {product._id}</small>
            </div>
          </div>
          <Link>
            <button onClick={deleteProduct} className="btn btn-outline-danger btn-sm">
              Borrar
            </button>{" "}
          </Link>
          <Link to={`/modifyp/${product._id}`}>
            {" "}
            <button className="btn btn-outline-dark btn-sm">
              Modificar
            </button>
          </Link>
        </div>

      </div>



    </div>
  );
};

export default Product;
