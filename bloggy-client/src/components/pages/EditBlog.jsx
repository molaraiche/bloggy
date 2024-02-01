import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import swal from "sweetalert";
const EditBlog = ({ id, title, content, image }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState();

  const EditHandler = async (e, id) => {
    e.preventDefault();
    console.log(id);
    console.log(newTitle, newContent, newImage);
    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("content", newContent);
    formData.append("image", newImage);
    try {
      const response = await axios.put(
        `https://bloggy-api-xjtx.onrender.com/api/bloggy/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const data = response.data;
      console.log(data);
      console.log("upadted !");
      swal("Blog get Updated");
      setTimeout(() => {
        window.location.replace("https://bloggy.molaraiche.com/");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="create-row">
      <h1>Edit Blog</h1>
      <form onSubmit={(e) => EditHandler(e, id)}>
        <input
          type="text"
          name="title"
          required
          id="title"
          placeholder={`${title}`}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          cols={10}
          rows={10}
          required
          name="content"
          id="content"
          placeholder={`${content}`}
          onChange={(e) => setNewContent(e.target.value)}
        />

        <label htmlFor="image">
          <FaCamera />{" "}
          {newImage ? (
            <span>{newImage.name}</span>
          ) : (
            <span> Replace Image</span>
          )}
          <input
            type="file"
            name="image"
            id="image"
            className="imageInput"
            onChange={(e) => setNewImage(e.target.files[0])}
          />
        </label>

        <div className="btns">
          <button type="submit">Edit</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
