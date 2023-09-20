import { useLocation } from "react-router-dom";
import "./style.css";

export const SingleBlog = () => {
  const { state } = useLocation();

  return (
    <div className="single-blog-container">
      <div className="title">
        <h1>{state.title}</h1>
      </div>
      <div className="single-blog-image">
        <img src={state.img} alt="single image" className="image" />
      </div>
    </div>
  );
};
