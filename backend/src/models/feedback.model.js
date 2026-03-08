import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },

    company: {
      type: String,
      trim: true,
    },

    role: {
      type: String,
      required: true,
    },

    industry: {
      type: String,
      required: true,
    },

    companySize: {
      type: String,
      enum: ["1-10", "11-50", "51-200", "200+"],
    },

    useCase: {
      type: String,
    },

    improvement: {
      type: String,
    },

    ratings: {
      accuracy: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
      },
      usefulness: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
      },
      recommend: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
      },
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // optional if anonymous feedback
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Feedback", feedbackSchema);