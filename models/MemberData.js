const mongoose = require("mongoose");

const MemberRolData = mongoose.Schema({
  guildId: String, 
  member: String,
  role: String,
  executor: String,
  Name: String
});

module.exports = mongoose.model("MemberRolData", MemberRolData);
