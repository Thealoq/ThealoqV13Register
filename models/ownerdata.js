const mongoose = require("mongoose");

const Ownerdata = new mongoose.Schema({
  GuildId: String, 
  Member: String,
  TotalReg: Number,
  WomanReg: Number,
  ManReg: Number,
});

module.exports = mongoose.model("Ownerdata", Ownerdata);
