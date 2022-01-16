const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
const OwnerData = require("../models/ownerdata")
const TaglıData = require("../models/taglıal");
exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let embed = new MessageEmbed()
  .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
  .setThumbnail( message.author.avatarURL({ dynamic: true}))
  .setFooter({ text: config.footer.toString() , iconURL: message.guild.iconURL({ dynamic: true })})
  .setColor("RANDOM")
  let Db = await TaglıData.findOne({ GuildId: message.guild.id, Member: message.member.id })
  let Dbtwo = await OwnerData.findOne({ GuildId: message.guild.id, Member: message.member.id })
    if(Db === null ) {
      let comp = 15;
      message.channel.send({ embeds :[embed.setDescription(`${member} Mevcut İlerleminiz \`${Dbtwo.TotalReg}\` Kayıt Durumundasiniz 
  
      ${(await client.createBar(Dbtwo.TotalReg,comp,8)).toString()} Seviye Yükselmek İçin 
      
      \`${comp - Dbtwo.TotalReg}\` Kayıt Etmen Gerek!
     
      Alıcağin Rol <@&${config.OnelevelTag}>`)]});
    }
        if( Dbtwo && Db !== null ) {
        let comp = 15;
         message.channel.send({ embeds :[embed.setDescription(`${member} Mevcut İlerleminiz \`${Db.TotalTag}\` Taglı \`${Dbtwo.TotalReg}\` Kayıt Durumundasiniz 

         ${(await client.createBar(Db.TotalTag,comp,8)).toString()} Seviye Yükselmek İçin 
    
        \`${comp - Db.TotalTag}\` Taglı Çekmen Gerekiyor
   
        Alıcağin Rol <@&${config.OnelevelTag}>

        ${(await client.createBar(Dbtwo.TotalReg,comp,8)).toString()}  Seviye Yükselmek İçin 
    
        \`${comp - Dbtwo.TotalReg}\` Kişi Kayıt Etmen Gerekiyor

        Alıcağin Rol <@&${config.Onelevelreg}> `)]});
   } 



}
exports.conf = {
  command: "verilerim",
  description: "",
  aliases: []
}