import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [SearchProducts, setSearchProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState({});

  const getProducts = async () => {
    await axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data.productos);
        setSearchProducts(response.data.productos);
        // setImage(response.data.productos.image.url)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (pSearch) => {
    var searchResults = SearchProducts.filter((element) => {
      if (
        element.title
          .toString()
          .toLowerCase()
          .includes(pSearch.toLowerCase()) ||
        element.description
          .toString()
          .toLowerCase()
          .includes(pSearch.toLowerCase()) ||
        element._id.toString().toLowerCase().includes(pSearch.toLowerCase())
      ) {
        return element;
      }
    });
    setProducts(searchResults);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <p className="titleP">Productos</p>
      <div className="containerInput">
        <input
          type="text"
          className="form-control inputBuscar"
          value={search}
          onChange={handleChange}
          placeholder="Buscar..."
        />
        <button className="btn ">
          {" "}
          <FaSearch />{" "}
        </button>
      </div>
      <div className="products">
        {products.map((prod) => {
          return (
            <Link
              key={prod._id}
              to={`/product/${prod._id}`}
              className="text-link"
            >
              <div>
                <div className="card deck">
                  <div className="cards">
                    <img
                      className="card-img-top"
                      src={prod.image.url}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{prod.title}</h5>
                      <p className="card-text">{prod.price}€</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">ID: {prod._id}</small>
                    </div>
                  </div>
                </div>

               
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
