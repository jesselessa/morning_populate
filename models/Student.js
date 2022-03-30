const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  firstName: String,
  surName: String,
  addresses: [{ type: mongoose.Types.ObjectId, ref: "Address" }],
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
