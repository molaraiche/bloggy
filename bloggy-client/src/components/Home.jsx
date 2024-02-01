import React from "react";
import Sliders from "./Sliders";
import { Link } from "react-router-dom";
const Home = ({ blogs, load }) => {
  return (
    <div>
      {blogs.length === 0 ? (
        <p className="empty">Please add a blog First !</p>
      ) : (
        <>
          <Sliders blogs={blogs} load={load} />
          <section className="discoverHolder">
            <Link className="discoverAll" to="/blogs">
              Discover All
            </Link>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
