import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./src/models/admin.model.js";

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // 🔥 delete old admin if exists
    await Admin.deleteOne({ email: "ismail.jawhari@ijatech.net" });
    console.log("Old admin removed if existed");

    const password = await bcrypt.hash("admin123", 10);

    // create new admin
    await Admin.create({
      email: "ismail.jawhari@ijatech.net",
      password,
      role: "admin",
    });

    console.log("✅ Admin recreated successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
run();