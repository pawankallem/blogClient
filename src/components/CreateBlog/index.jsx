import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const CreateBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Title:", formData.title);
    console.log("Content:", formData.content);
    console.log("Image:", formData.image);

    navigate("/");
  };

  return (
    <div className="create-blog-container">
      <div className="create-blog">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-container">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="create-title"
            />
          </div>
          <div className="input-container">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows="4"
              required
              className="create-content"
            />
          </div>
          <div className="input-container">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="create-image"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
