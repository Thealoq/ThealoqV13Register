const mongoose = require("mongoose");

const TaglıAlım = mongoose.Schema(
  {
    guildId: String,
    taglıalım: Boolean,
  },
  { minimize: false, collection: "TaglıAlım" }
);

module.exports = mongoose.model("TaglıAlım", TaglıAlım);
