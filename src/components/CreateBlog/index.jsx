import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    setFormData({
      ...formData,
      image: base64,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await axios.post(
        "https://posts-server-4ra7.onrender.com/posts",
        {
          title: formData.title,
          content: formData.content,
          image: formData.image ? formData.image : "",
        }
      );
      navigate("/");
    } catch (error) {
      console.log("error: ", error);
    }
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
