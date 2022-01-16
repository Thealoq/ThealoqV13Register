const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
const RegisterData  = require("../models/ownerdata")
exports.execute = async (client, message, args) => {
  let embed = new MessageEmbed()
  .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
  .setFooter({ text: config.footer.toString() , iconURL: message.guild.iconURL({ dynamic: true }) })
  .setColor("RANDOM")
  let RegisterSiralama = await RegisterData.find({ GuildId: message.guild.id }).sort({ TotalReg: -1 }).exec();
  if(RegisterSiralama.length === 0) return message.channel.send({ embeds: [embed.setDescription(`Herhangi bir kayıt verisi bulunamadı!`)]})
  RegisterSiralama = RegisterSiralama.filter(x => message.guild.members.cache.has(x.ManReg) ||  x.TotalReg).splice(0, 10)
  message.channel.send({embeds : [embed.setDescription(RegisterSiralama.map((x, i) => `\`${i+1}.\` <@${x.Member}> Toplam **${x.TotalReg}** (\`${x.ManReg} Erkek ${x.WomanReg} Kız\`)`).join(" \n").toString())]})
}
exports.conf = {
  command: "topteyit",
  description: "",
  aliases: []
}