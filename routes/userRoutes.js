const express = require("express");
const router = express.Router();
const { userCreateSchema, userUpdateSchema } = require("../middelware/joi");
const {
  createUser,
  updateUser,
  getUser,
  getAllUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/create", userCreateSchema, createUser);
router.put("/update/:id", userUpdateSchema, updateUser);
router.get("/:id", getUser);
router.get("/", getAllUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
