const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
exports.execute = async (client, message, args) => {
  let embed = new MessageEmbed()
  .setColor(`RANDOM`)
message.channel.send({
  embeds: [embed.setDescription(`
\`❯\` Sunucunda Toplam ${message.guild.members.cache.filter(s => s.voice.channel).size} Kişi Ses Kanalında Aktif 
\`❯\` Sunucu da şuan da toplam ${message.guild.memberCount} üye var 
\`❯\` Toplam ${message.guild.members.cache.filter(t => t.user.username.includes(config.tag[0])).size} kişi tagımızı alarak bize destek oluyor 
\`❯\` Sunucumuz şuan da ${message.guild.premiumSubscriptionCount} seviye ve ${message.guild.roles.cache.get(config.Booster).members.size} Kişi boost Basmiş
 `)]
})
}
exports.conf = {
  command: "say",
  description: "",
  aliases: []
}