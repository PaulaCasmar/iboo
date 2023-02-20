import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

const CategoryId = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [image, setImage] = useState({});
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/category/${categoryId}`
      );
      console.log(response);
      setProductos(response.data.categoria.products);
      setCategories(response.data.categoria);
      setImage(response.data.categoria.products.image);
    };
    getCategories();
  }, []);

  const deleteCategories = async (e) => {
    e.preventDefault();
    let option = window.confirm("¿Seguro que quieres borrar la categoria?");
    if (option == true) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/categories/${categoryId}`
        );
        console.log(response);

        setTimeout(() => {
          window.location.href = "/categories";
        }, 2000);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <div>
      <p className="titleP">{categories.title}</p>
      <div className="products">
        {productos.map((productos) => {
          return (
            <Link key={productos._id} to={`/product/${productos._id}`} className="text-link">
              <div>
                <div className="card deck">
                  <div className="cards">
                    <img
                      className="card-img-top"
                      src={productos.image.url}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{productos.title}</h5>
                      <p className="card-text">{productos.price}€</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">ID: {productos._id}</small>
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

export default CategoryId;
