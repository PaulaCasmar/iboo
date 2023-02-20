import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategory(response.data.categorias);
      console.log(response.data);
    };
    getCategory();
  }, []);

  const deleteCategory = (categoria) => {
    localStorage.setItem("cat", categoria);
    // e.preventDefault()
    let option = window.confirm("¿Seguro que quieres borrar esta categoria?");
    let categoria2 = localStorage.getItem("cat");
    if (option == true) {
      try {
        const response = axios.delete(
          `http://localhost:5000/api/category/${categoria2}`
        );
        console.log(response);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <div>
      <p className="titleP">Categorías</p>
      <div className="products">
        {category.map((categorias) => {
          return (
            <div key={categorias._id}>

              <div className="card deck">
                <div className="cards">
                  <img
                    className="card-img-top"
                    src={categorias.image.url}
                    alt="Card image cap"
                  />

                 
                  <Link
                    to={`/category/${categorias._id}`}
                    className="Cat"
                  >
                    {" "}
                   {categorias.title}{" "}
                  </Link>

                </div>
              </div>
            </div>
          );


        })}
      </div>
    </div>
  );
};

export default Category;
