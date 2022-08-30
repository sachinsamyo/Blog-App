import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Common/Navbar";
import Blogs from "./Pages/BlogsHome";

import UpdateBlog from "./Pages/UpdateBlog";
import WriteBlog from "./Pages/Create";

function App() {
  return (
    <div className="">
      <Navbar />
      <h1 className="text-center py-5">Welcome to Blogger</h1> <br />
      <p className="paratag">Create a unique blog to publish your passion, your way</p>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/update" element={<UpdateBlog />} />s
        <Route path="/create" element={<WriteBlog />} />
     
      </Routes>
    </div>
  );
}

export default App;
