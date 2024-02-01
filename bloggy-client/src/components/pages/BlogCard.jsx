import React from "react";
import { Link } from "react-router-dom";
const BlogCard = ({ homeImage, id, name }) => {
  return (
    <section className="blogCard">
      <div className="imgBlog">
        <Link to={`${id}`}>
          <img
            src={`https://bloggy-api-xjtx.onrender.com/${homeImage}`}
            alt={name}
          />
        </Link>
      </div>
      <div className="discover">
        <Link to={`${id}`}>Discover</Link>
      </div>
    </section>
  );
};

export default BlogCard;
