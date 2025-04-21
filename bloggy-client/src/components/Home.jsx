import React from "react";
import Sliders from "./Sliders";
import { Link } from "react-router-dom";
const Home = ({ blogs, load }) => {
  return (
    <div className='homeHolder'>
      {blogs.length === 0 ? (
        <div className='loaderHolder'>
          <div className='loader'></div>

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
