const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    // required: true,
    ref: "User",
  },
  attendanceId: {
    type: Schema.Types.ObjectId,
    // required: true,
    ref: "attendance",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

module.exports = mongoose.model("Token", tokenSchema);
