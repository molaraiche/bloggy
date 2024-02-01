// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./pages/BlogCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

export default function App({ blogs }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper">
        {blogs.map((blog) => (
          <SwiperSlide key={blog._id}>
            <BlogCard homeImage={blog.image} id={blog._id} name={blog.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
