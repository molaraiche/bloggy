const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (err, file, cb) => cb(null, "upload/images"),
  filename: (err, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const uploadSetting = multer({ storage: multerStorage });

const upload = uploadSetting.single("image");

module.exports = upload;
