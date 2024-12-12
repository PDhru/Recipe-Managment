import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    cookingTime: "",
    image: "",  // Add image state to track the current image
  });

  // Handle image file state
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get(`http://localhost:8000/api/recipes/${id}`, config);
      setRecipe(response.data);
    };
    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", recipe.title);
      formData.append("ingredients", recipe.ingredients);
      formData.append("instructions", recipe.instructions);
      formData.append("cuisine", recipe.cuisine);
      formData.append("cookingTime", recipe.cookingTime);

      // If the user selects a new image, append it to the form data
      if (image) {
        formData.append("image", image);
      }

      const config = {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Set the correct content type for file uploads
        },
      };
      await axios.put(`http://localhost:8000/api/recipes/${id}`, formData, config);
      navigate("/");  // Redirect to homepage or recipes list after successful update
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };


    return (
        <>
 <div className="contact-area section_padding_80">
      <div className="container">
        <div className="contact-form-area">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="contact-form-sidebar item wow fadeInUpBig" data-wow-delay="0.3s" style={{ backgroundImage: 'url("/img/bg-img/contact.jpg")', height: 544, visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUpBig' }}>
              </div>
            </div>
            <div className="col-12 col-md-7 item" style={{ height: 544 }}>
              <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUpBig' }}>
              <h2 className="text-white">Edit Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <input className="px-3 py-2 mb-2 rounded-3 w-100" type="text" name="title" value={recipe.title} onChange={handleChange} placeholder="Title" required />
                    <textarea className="px-3 py-2 mb-2 rounded-3 w-100" name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder="Ingredients (comma-separated)" required ></textarea>
                    <textarea className="px-3 py-2 mb-2 rounded-3 w-100" name="instructions" value={recipe.instructions} onChange={handleChange} placeholder="Instructions" required ></textarea>
                    <input className="px-3 py-2 mb-2 rounded-3 w-100" type="text" name="cuisine" value={recipe.cuisine} onChange={handleChange} placeholder="Cuisine" required />
                    <input className="px-3 py-2 mb-2 rounded-3 w-100" type="number" name="cookingTime" value={recipe.cookingTime} onChange={handleChange} placeholder="Cooking Time (minutes)" required />
                          {/* Image upload input */}
                    <input type="file" onChange={handleImageChange} className="px-3 py-2 mb-2 rounded-3 w-100 bg-white" />
                    {recipe.image && <p className="text-white mt-2">Current Image: <img src={`http://localhost:8000/${recipe.image}`} className="rounded-2" alt="current recipe" style={{ width: "100px" }} /></p>}
                    
                    <button className="d-block mb-2 btn  btn-success" type="submit" >Update Recipe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



            <div>
              
            </div>
        </>
    );
};

export default EditRecipe;
