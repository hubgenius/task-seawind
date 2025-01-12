const User = require("../models/user");
const createUser = async (req, res) => {
  try {
    const { name, age, email, phoneNumber } = req.body;

    if (!name || !age || !email || !phoneNumber)
      throw new Error("Please Fill All Field");
    const user = new User({
      name,
      email,
      age,
      phoneNumber,
    });

    await user.save();
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, age, phoneNumber } = req.body;

    const findUser = await User.findById(req.params.id);

    if (!findUser) throw new Error("User is not found");

    const updateUserData = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        age,
        phoneNumber,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "UserData Updated Successfully",
      updateUserData,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const getData = await User.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: " Get UserData Successfully",
      getData,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const getAllData = await User.find();

    res.status(200).json({
      success: true,
      message: "Get All UserData  Successfully",
      getAllData,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const findUser = await User.findById(req.params.id);

    if (!findUser) throw new Error("User is not found");

    const deletUserData = await User.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "UserData Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { createUser, updateUser, getUser, getAllUser, deleteUser };
