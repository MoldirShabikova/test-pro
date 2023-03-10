import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);


app.get("/test", (req, res) => {
  res.send("it works");
});


app.listen(4000, () => console.log("listening on port 4000"));
