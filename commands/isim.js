const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
exports.execute = async (client, message, args) => {
       let embed = new MessageEmbed()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
      .setFooter({ text: config.footer.toString() , iconURL: message.guild.iconURL({ dynamic: true }) })
      .setColor("RANDOM")
      if (!message.member.roles.cache.has(config.registery) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Yetkiniz Yeterli Değil")
      let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 
      let Name = args[1] 
      let Age = args[2]
      if (!member || !Age || !Name) return message.channel.send({ embeds: [embed.setDescription(`\`Yanlış Kullandin. Örnek: .Kayıt @Thealoq\ID\``)] })
      await member.setNickname(`${config.tag} ${Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase()}${Age ? ` | ${Age}` : ``}`).catch(e => { })
      if (member.user.username.includes(config.tag)) {
        await member.setNickname(`${config.tag} ${Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase()}${Age ? ` | ${Age}` : ``}`).catch(e => { })
    } else {
        await member.setNickname(`${config.tagsız} ${Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase()}${Age ? ` | ${Age}` : ``}`).catch(e => { })
    }
      message.channel.send({ embeds: [embed.setDescription(`\`${member.displayName}\` Başariyla Yeni İsmi Değiştirildi`)]})
}
exports.conf = {
  command: "isim",
  description: "",
  aliases: ["name"]
}