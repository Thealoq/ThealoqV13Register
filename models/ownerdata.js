const mongoose = require("mongoose");

const Ownerdata = new mongoose.Schema(
  {
    GuildId: String,
    Member: String,
    TotalReg: Number,
    WomanReg: Number,
    ManReg: Number,
  },
  { minimize: false, collection: "Ownerdata" }
);

module.exports = mongoose.model("Ownerdata", Ownerdata);
