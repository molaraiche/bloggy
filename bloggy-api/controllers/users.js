const Users = require("../models/users");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const CreateToken = (id) => {
  return jwt.sign({ id }, SECRET, { expiresIn: "1d" });
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  // Check if the inputs has data
  if (!email || !password) {
    res
      .status(400)
      .json({ message: "please fill all the fields with the correct Data !" });
  }
  try {
    // check the format of the imported data
    if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
      res.status(400).json({ message: "Please add correct format !" });
    } else {
      // We check if there is any user using this email
      const existUser = await Users.findOne({ email });
      if (existUser) {
        res.json({ message: "user exist Please try another email !" });
      } else {
        const HashedPassword = bcrypt.hashSync(password, 12);
        const newUser = await Users.create({ email, password: HashedPassword });
        const token = CreateToken(newUser._id);
        res.status(200).json({ message: "Sign up !", newUser, token: token });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // Check if the inputs has data
  if (!email || !password) {
    res.status(400).json({
      message: "please fill all the fields with the correct Data !",
    });
  }
  try {
    // check the format of the imported data
    if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
      res.status(400).json({ message: "Please add correct format !" });
    } else {
      // We check if there is any user using this email
      const existUser = await Users.findOne({ email });
      if (existUser) {
        // Check if the password is correct !
        const matchedPassword = bcrypt.compareSync(
          password,
          existUser.password
        );
        if (matchedPassword) {
          const token = CreateToken(existUser._id);

          res.status(200).json({ message: "Login !!", token });
        } else {
          res.json({
            message:
              "user Does not exist or password is incorrect ! Please try check your credential informations! ",
          });
        }
      } else {
        res.json({
          message:
            "user Does not exist or password is incorrect ! Please try check your credential informati",
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

module.exports = { signup, login };
