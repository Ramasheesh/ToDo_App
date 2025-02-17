// const User = require("../../models/userModel");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // User Signup
// const signUp = async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, phone, password: hashedPassword });

//     res.status(201).json({ message: "User created", user });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // User Login
// const login = async (req, res) => {
//   const { email, phone, password } = req.body;

//   try {
//     const user = await User.findOne({ $or: [{ email }, { phone }] });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.json({ message: "Login successful", token });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // // User Logout
// const logout = (req, res) => {
//     // In this example, logout could just mean removing the token from the client-side.
//     res.json({ message: "User logged out" });
//   };
// module.exports = { signUp, login };
