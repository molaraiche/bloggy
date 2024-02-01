const router = require("express").Router();
const {
  createBlog,
  getBlogs,
  updateBlog,
  DeleteBlog,
} = require("../controllers/Blogs");
const upload = require("../util/imageUploader");

router.get("/", getBlogs);
router.post("/create", upload, createBlog);
router.put("/:id", upload, updateBlog);
router.delete("/:id", DeleteBlog);
module.exports = router;
