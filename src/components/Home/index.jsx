import { useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleNavigate = (elem) => {
    navigate("/posts/" + elem._id, {
      state: {
        title: elem.title,
        content: elem.content,
        img: elem.image,
      },
    });
  };

  const handleCreateBlog = () => {
    navigate("/create-blog");
  };

  const showContent = (elem) => {
    return (
      <div
        className="blog-image"
        key={elem._id}
        onClick={() => handleNavigate(elem)}
      >
        <div className="blog-title">{elem.title}</div>
        {elem.image && (
          <img className="image" src={elem.image} alt="blog-image" />
        )}
      </div>
    );
  };

  const handleGetData = async (req, res) => {
    try {
      const res = await axios.get(
        "https://posts-server-4ra7.onrender.com/posts/all"
      );
      setData(res.data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="home-container">
      <div className="nav-bar-container">
        <div className="title">Blogs</div>
        <div className="create-blog-button-container">
          <button className="create-blog" onClick={handleCreateBlog}>
            Create Blog
          </button>
        </div>
      </div>
      <div className="content">
        {data.map((elem) => {
          return showContent(elem);
        })}
      </div>
    </div>
  );
};
