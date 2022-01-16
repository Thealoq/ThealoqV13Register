const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config = require("../settings.json")
const Data = require("../models/taglıal")
exports.execute = async (client, message, args) => {
  if (!message.member.roles.cache.has(config.registery) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Yetkiniz Yeterli Değil")
  let Db = await Data.findOne({ GuildId: message.guild.id })
  let tag = new RegExp(config.tag)
  let x = Db && Db.tagalanlar ? Db.tagalanlar : []
  if (tag.test(member.user.username)) {
    if (Db && Db.tagalanlar.includes(member.user.id)) {
      message.reply("Bu Kişi Zaten Biri Tarafidan Tag Almiş")
    } else {
      await Data.findOneAndUpdate({ GuildId: message.guild.id, Member: message.member.id }, {
        $push: {
          tagalanlar:
            member.user.id, 
        },
        $inc: { TotalTag: 1 } 
      }, {  
        upsert: true
      })
      message.reply(`${member} Başariyla Tag Aldi`)
    }
  } else {
    message.reply("Kullancıda Tag Yok")
  }
}
exports.conf = {
  command: "tagaldır",
  description: "",
  aliases: []
}

