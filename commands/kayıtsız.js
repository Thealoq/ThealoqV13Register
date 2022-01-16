const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 
  let embed = new MessageEmbed()
  .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
  .setFooter({ text: config.footer.toString() , iconURL: message.guild.iconURL({ dynamic: true }) })
  .setColor("RANDOM")
  if (!message.member.roles.cache.has(config.registery) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Yetkiniz Yeterli Değil")
  if(!member) return message.reply( { embeds : [embed.setDescription("Kayitli Bir Üye Bulunamadi")]})
  if (member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send({ embeds: [embed.setDescription(`İşlem geçersiz, senden üst && aynı pozisyonda birisine bunu yapamazsın.`)] })
  if(member.roles.cache.get(config.unregister)) return message.reply( { embeds : [embed.setDescription("etiketlediğin kişi zaten kayıtsız bi üye")]})
  member.setNickname(`${config.tag} İsim | Yaş`)
  member.roles.set([config.unregister]).catch(e => {  })
  message.channel.send( { embeds : [embed.setDescription(`${member} Başariyla Kayitsiza Atildi`)]})
}
exports.conf = {
  command: "kayıtsız",
  description: "",
  aliases: ["unregister"]
}