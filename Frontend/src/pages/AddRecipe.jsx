import React, { useState } from "react";
import axios from "axios";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    cookingTime: "",
  });
  const [image, setImage] = useState(null); // For storing the image file
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Save the selected file
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      const formData = new FormData();

      // Append fields to FormData
      Object.keys(recipe).forEach((key) => {
        formData.append(key, recipe[key]);
      });

      if (image) {
        formData.append("image", image); // Append the image file
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post("http://localhost:8000/api/recipes", formData, config);
      setMessage("Recipe added successfully!");
      setRecipe({
        title: "",
        ingredients: "",
        instructions: "",
        cuisine: "",
        cookingTime: "",
      });
      setImage(null);
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="contact-area section_padding_80">
      <div className="container">
        <div className="contact-form-area">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="contact-form-sidebar item wow fadeInUpBig" data-wow-delay="0.3s" style={{ backgroundImage: 'url("img/bg-img/contact.jpg")', height: 544, visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUpBig' }}>
              </div>
            </div>
            <div className="col-12 col-md-7 item" style={{ height: 544 }}>
              <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUpBig' }}>
                <h2 className="form-title mb-30">Add a New Recipe</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div>
                    <input
                      type="text"
                      name="title"
                      value={recipe.title}
                      onChange={handleChange}
                      placeholder="Title"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="ingredients"
                      value={recipe.ingredients}
                      onChange={handleChange}
                      placeholder="Ingredients (comma-separated)"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <textarea
                      name="instructions"
                      value={recipe.instructions}
                      onChange={handleChange}
                      placeholder="Instructions"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="cuisine"
                      value={recipe.cuisine}
                      onChange={handleChange}
                      placeholder="Cuisine"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="cookingTime"
                      value={recipe.cookingTime}
                      onChange={handleChange}
                      placeholder="Cooking Time (minutes)"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="file"
                      name="image"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>
                  <button type="submit">Add Recipe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddRecipe