import Card from "./Card";

const Blogs = ({ blogs }) => {
  return (
    <section className="blogs">
      {blogs.length === 0 ? (
        <p className="empty">Please add a blog First !</p>
      ) : (
        blogs.map((blog) => (
          <Card
            key={blog._id}
            id={blog._id}
            title={blog.title}
            cover={blog.image}
          />
        ))
      )}
    </section>
  );
};

export default Blogs;
