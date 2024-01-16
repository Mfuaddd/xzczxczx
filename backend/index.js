import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const PostSchema = new Schema(
  {
    title: String,
    category: String,
    text: String,
    image: String,
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", PostSchema);

app.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find({});
    res.send(posts);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findById(id);
    res.send(post);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { title, category, text, image } = req.body;
    const newPost = new PostModel({ title, category, text, image });
    await newPost.save();
    res.send("Got a POST request");
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await PostModel.findByIdAndDelete(id);
    res.send("Got a DELETE request");
  } catch (error) {
    console.error(error.message);
  }
});

mongoose
  .connect("mongodb+srv://mi6vyr5cb:mi6vyr5cb@cluster0.wireeb6.mongodb.net/")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
