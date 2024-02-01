import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EditBlog from "./components/pages/EditBlog";
import BlogsContent from "./components/pages/BlogContent";
import Blogs from "./components/pages/Blogs";
import CreateBlog from "./components/pages/CreateBlog";
const BloggyRoutes = ({ blogs }) => {
  return (
    <Routes>
      <Route path="/" element={<Home blogs={blogs} />} />
      <Route path="/blogs" element={<Blogs blogs={blogs} />} />

      {blogs.map((blog) => (
        <Route
          key={blog._id}
          path={`/${blog._id}`}
          element={
            <BlogsContent
              blogs={blogs}
              title={blog.title}
              blogimage={blog.image}
              content={blog.content}
              id={blog._id}
            />
          }
        />
      ))}
      {blogs.map((blog) => (
        <Route
          key={blog._id}
          path={`/edit-blog/${blog._id}`}
          element={
            <EditBlog
              title={blog.title}
              blogimage={blog.image}
              content={blog.content}
              id={blog._id}
            />
          }
        />
      ))}
      <Route path="/create" element={<CreateBlog />} />
    </Routes>
  );
};

export default BloggyRoutes;
