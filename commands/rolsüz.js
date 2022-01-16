const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
exports.execute = async (client, message, args) => {
  if (!message.member.roles.cache.has(config.unregister) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Yetkiniz Yeterli Değil")
  let can = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)
  if(args[0] == "ver") {
      can.forEach(r => {
      r.roles.add(config.unregister)
  })
  const thealoq = new MessageEmbed()
  .setAuthor(" "+message.author.username +" ", message.author.avatarURL())
  .setColor("RANDOM")
  .setDescription("Sunucuda rolü olmayan \`"+ can.size +"\` kişiye kayıtsız rolü verildi!")
  message.channel.send({ embeds: [thealoq]})
  } else if(!args[0]) {
  const loq = new MessageEmbed()
  .setAuthor(""+message.author.username +" ", message.author.avatarURL())
  .setColor("RANDOM")
  .setDescription(`Sunucumuzda rolü olmayan \``+ can.size +`\` kişi var. Bu kişilere kayıtsız rolü vermek için \`.rolsüz ver\` komutunu uygulayın!`)
  message.channel.send({embeds : [loq]})
  }
}
exports.conf = {
  command: "rolsüz",
  description: "",
  aliases: ["everyone"]
}