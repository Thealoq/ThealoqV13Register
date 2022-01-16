const mongoose = require("mongoose");

const TaglıAl = mongoose.Schema({
  GuildId: String, 
  Member: String,
  TotalTag: Number,
  tagalanlar: Array,
});

module.exports = mongoose.model("TaglıAl", TaglıAl);
