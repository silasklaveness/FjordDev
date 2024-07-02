import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  name: {
    type: String,
    required: [true, "Project name is required."],
    trim: true,
    minLength: [2, "Project name must be at least 2 characters long."],
    maxLength: [100, "Project name must be less than 100 characters long."],
  },
  description: {
    type: String,
    required: [true, "Project description is required."],
  },
  image: {
    type: String,
    required: [true, "Project image URL is required."],
  },
  likes: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
