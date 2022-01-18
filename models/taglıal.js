const mongoose = require("mongoose");

const TaglıAl = mongoose.Schema(
  {
    GuildId: String,
    Member: String,
    TotalTag: Number,
    tagalanlar: Array,
  },
  { minimize: false, collection: "TaglıAl" }
);

module.exports = mongoose.model("TaglıAl", TaglıAl);
