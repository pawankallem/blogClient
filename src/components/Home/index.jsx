import { useNavigate } from "react-router-dom";
import "./style.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/posts/" + 1, {
      state: {
        title: "ABC title",
        img: "https://img.freepik.com/free-photo/colorful-bird-with-yellow-beak-sits-pink-flower_1340-38643.jpg",
      },
    });
  };

  const handleCreateBlog = () => {
    navigate("/create-blog");
  };

  const showContent = () => {
    return (
      <div className="blog-image" onClick={handleNavigate}>
        <div className="blog-title">ABC title</div>
        <img
          className="image"
          src="https://img.freepik.com/free-photo/colorful-bird-with-yellow-beak-sits-pink-flower_1340-38643.jpg"
          alt="blog-image"
        />
      </div>
    );
  };

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
        {showContent()}
        {showContent()}
        {showContent()}
        {showContent()}
        {showContent()}
        {showContent()}
        {showContent()}
      </div>
    </div>
  );
};
