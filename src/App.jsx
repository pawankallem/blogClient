import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { SingleBlog } from "./components/SingleBlog";
import { CreateBlog } from "./components/CreateBlog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/posts/:id" element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
