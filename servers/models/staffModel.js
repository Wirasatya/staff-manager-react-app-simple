const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nip: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    birth_date: {
      type: Date,
      default: Date.now,
    },
    gender: {
      type: Number,
      default: 1, //1=male 2=female 3=other
    },
    department: {
      type: String,
      default: "primary",
    },
    phone_number: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Staff", staffSchema);
