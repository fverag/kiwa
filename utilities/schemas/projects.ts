import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
});

const projectsModel = mongoose.models.projects || mongoose.model("projects", projectsSchema);

export default projectsModel;
