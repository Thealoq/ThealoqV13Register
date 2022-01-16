const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config =  require("../settings.json")
exports.execute = async (client, message, args) => {
  if(message.author.id !== config.owners) return
  let KadınEmoji = "https://cdn.discordapp.com/emojis/928278844601950229.gif?size=44&quality=lossless";
  let ErkekEmoji = "https://cdn.discordapp.com/emojis/928278844652273705.gif?size=44&quality=lossless";
  let kalp = "https://cdn.discordapp.com/emojis/928316801425756190.gif?size=44&quality=lossless";
  let Tac = "https://cdn.discordapp.com/emojis/928317108461396038.gif?size=44&quality=lossless";
  let Brh = "https://cdn.discordapp.com/emojis/928317439803019274.gif?size=44&quality=lossless";
  let Loading = "https://cdn.discordapp.com/emojis/928317729759440957.gif?size=44&quality=lossless";
  let Hello = "https://cdn.discordapp.com/emojis/928882564385615873.gif?size=44&quality=lossless";
  let Sayı0 = "https://cdn.discordapp.com/emojis/928885707525742673.gif?size=44&quality=lossless"; 
  let Sayı1 = "https://cdn.discordapp.com/emojis/928885709543202846.gif?size=44&quality=lossless";
  let Sayı2 = "https://cdn.discordapp.com/emojis/931886767521534003.gif?size=96&quality=lossless";
  let Sayı3 = "https://cdn.discordapp.com/emojis/928885709354438656.gif?size=44&quality=lossless";
  let Sayı4 = "https://cdn.discordapp.com/emojis/928885709635485707.gif?size=44&quality=lossless";
  let Sayı5 = "https://cdn.discordapp.com/emojis/928885708901449808.gif?size=44&quality=lossless";
  let Sayı6 = "https://cdn.discordapp.com/emojis/928885709052465152.gif?size=44&quality=lossless";
  let Sayı7 = "https://cdn.discordapp.com/emojis/928885708817588226.gif?size=44&quality=lossless";
  let Sayı8 = "https://cdn.discordapp.com/emojis/928885709056671764.gif?size=44&quality=lossless";
  let empty = "https://cdn.discordapp.com/emojis/931967080624971816.webp?size=96&quality=lossless";
  let emptyend = "https://cdn.discordapp.com/emojis/931967080675287091.webp?size=96&quality=lossless";
  let fill = "https://cdn.discordapp.com/emojis/931967080595587102.gif?size=96&quality=lossless";
  let fillend = "https://cdn.discordapp.com/emojis/931967080486559776.gif?size=96&quality=lossless";
  let fillstart = "https://cdn.discordapp.com/emojis/931967080654307358.gif?size=96&quality=lossless";
  let x = "https://cdn.discordapp.com/emojis/931971163813453834.gif?size=96&quality=lossless";
  
  message.guild.emojis.create(KadınEmoji, "k_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(ErkekEmoji, "e_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(kalp, "kalp").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Tac, "tac").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Brh, "brh").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Loading, "loading").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Hello, "hello").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı0, "0_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı1, "1_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı2, "2_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı3, "3_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı4, "4_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı5, "5_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı6, "6_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı7, "7_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı8, "8_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(Sayı9, "9_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(empty, "empty").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(emptyend, "emptyend").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(fill, "fill").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(fillend, "fillend").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(fillstart, "fillstart").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
  message.guild.emojis.create(x, "x_").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);

}
exports.conf = {
  command: "emoji",
  description: "",
  aliases: []
}