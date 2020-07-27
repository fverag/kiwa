import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category_id: Number,
  image: Object,
  shortDescription: String,
  longDescription: String,
  complementaryImages: Object,
});

const projectsModel = mongoose.models.projects || mongoose.model("projects", projectsSchema);

export default projectsModel;
