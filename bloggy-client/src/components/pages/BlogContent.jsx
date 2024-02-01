import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";
import axios from "axios";
const BlogContent = ({ title, blogimage, content, id, blogs }) => {
  const [manage, setManage] = useState(true);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://bloggy-api-xjtx.onrender.com/api/bloggy/${id}`);
        console.log("Deleted");

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        setTimeout(() => {
          window.location.replace("https://bloggy.molaraiche.com/");
        }, 2000);
      } else {
        swal("Your imaginary file is safe!");
        console.log("Not Deleted");
      }
    });
  };
  return (
    <section className="blogContent">
      <div className="backBtn">
        <Link to="/">Back</Link>
      </div>
      <h1>{title}</h1>
      <div className="content">
        <div className="imageHolder">
          <img
            src={`https://bloggy-api-xjtx.onrender.com/${blogimage}`}
            alt={title}
          />
        </div>
        <p>{content}</p>
      </div>
      <section className="management">
        {manage ? (
          <section className="mg-icons">
            <Link to={`/edit-blog/${id}`}>
              <FaEdit />
            </Link>
            <MdDelete onClick={(e) => deleteHandler(e, id)} />
          </section>
        ) : null}
      </section>
    </section>
  );
};

export default BlogContent;
