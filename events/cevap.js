const Discord = require("discord.js");
const config = require("../settings.json")
const main = require("../function/login")
const client = main.getClient()
exports.execute = async (message) => {
 
    if(message.content.toLowerCase() == "tag" || message.content.toLowerCase() == ".tag" ||  message.content.toLowerCase() == "tagımız") {
        message.channel.send(config.tag)
      }
    
      if(message.content.toLowerCase() == "sea" || message.content.toLowerCase() == "sa") {
        message.reply("as")
      } 

    
   
};
exports.conf = {
    event: "messageCreate"
};

