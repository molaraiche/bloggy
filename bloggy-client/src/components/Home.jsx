import React from "react";
import Sliders from "./Sliders";
import { Link } from "react-router-dom";
const Home = ({ blogs, load }) => {
  return (
    <div className='homeHolder'>
      {blogs.length === 0 ? (
        <div className='loaderHolder'>
          <div className='loader'></div>
          <p>
            Please add a blog First Or Wait for blogs to fetch (free server)
            <a
              className='render'
              href='https://render.com/pricing?_gl=1*1dytnul*_gcl_au*NDk2NTQwNTU5LjE3Mjk5MTU0MDA.*_ga*MTEyMTIwNDUwMS4xNzI5OTE1NDAw*_ga_QK9L9QJC5N*MTcyOTkxNTM5OS4xLjAuMTcyOTkxNTM5OS42MC4wLjA.'
              target='_blank'>
              Render
            </a>
          </p>
        </div>
      ) : (
        <>
          <Sliders blogs={blogs} load={load} />
          <section className='discoverHolder'>
            <Link className='discoverAll' to='/blogs'>
              Discover All
            </Link>
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
