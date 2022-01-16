const mongoose = require("mongoose");

const TaglıAlım = mongoose.Schema({
  guildId: String, 
  taglıalım: Boolean,
});

module.exports = mongoose.model("TaglıAlım", TaglıAlım);
