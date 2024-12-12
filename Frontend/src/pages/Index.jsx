import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  // Fetch recipes from the backend
  const fetchRecipes = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get("http://localhost:8000/api/recipes", config);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // Delete a recipe
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:8000/api/recipes/${id}`, config);
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  // Navigate to the edit recipe page
  const handleEdit = (id) => {
    navigate(`/edit-recipe/${id}`);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className="archive-area section_padding_80">
      <div className="container">
        <div className="row">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp bg-white " data-wow-delay="0.1s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img
                    src={`http://localhost:8000/${recipe.image}`}
                    alt={recipe.title}
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                </div>
                {/* Post Content */}
                <div className="post-content px-4 ">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a >By {recipe.author?.username || "Unknown"}</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a >{new Date(recipe.createdAt).toLocaleDateString()}</a>
                      </div>
                    </div>
                  </div>
                  <a >
                    <h4 className="post-headline">{recipe.title}</h4>
                  </a>
                  <p>{recipe.cuisine}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(recipe._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(recipe._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="col-12">
          <div className="pagination-area d-sm-flex mt-15">
            <div className="page-status">
              <p>Showing {recipes.length} recipes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;