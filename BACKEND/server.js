import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import { connectCloudinary } from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

//app config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://prescripto-web.vercel.app", // Frontend domain
      "https://adminprescripto.vercel.app", // Admin panel domain
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "token",
      "atoken",
      "dtoken",
    ], // Include both token types
  })
);

//api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is running GOOD");
});

app.listen(port, () => {
  console.log("SERVER STARTED ON PORT", port);
});
