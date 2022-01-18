const mongoose = require("mongoose");

const MemberRolData = mongoose.Schema(
  {
    guildId: String,
    member: String,
    role: String,
    executor: String,
    Name: String,
  },
  { minimize: false, collection: "MemberRolData" }
);

module.exports = mongoose.model("MemberRolData", MemberRolData);
