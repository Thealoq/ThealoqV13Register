const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
const Data = require("../models/MemberData")
exports.execute = async (client, message, args) => {
  let embed = new MessageEmbed()
      .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
      .setFooter({ text: config.footer.toString() , iconURL: message.guild.iconURL({ dynamic: true }) })
      .setColor("RANDOM")
      if (!message.member.roles.cache.has(config.registery) && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Yetkiniz Yeterli Değil")
      let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 
      if(!member) return message.reply( { embeds : [embed.setDescription("Kayitli Bir Üye Bulunamadi")]})
      let UyeData = await Data.find({ guildId: message.guild.id, member: member.id });
      let WomanRole = config.woman
      let ManRole = config.man
      const MemberData = `${UyeData.map(x => `Yetkili: [<@${x.executor}>]  \`${x.Name}\` (${x.role === "Erkek" ? `<@&${ManRole}>` : `<@&${WomanRole}> `})
       `).join("\n ")}`
       if (MemberData) {
        message.channel.send({ embeds: [embed.setDescription(`• ${member} Adlı Kişinin isim geçmişi \n\n ${MemberData}`)] }).then(msg => {
        })
    } else {
        message.channel.send({ embeds: [embed.setDescription(`Daha Önceden Kayit Olmamiş`)]}).then(msg => {
        })

    }
}
exports.conf = {
  command: "isimler",
  description: "",
  aliases: []
}