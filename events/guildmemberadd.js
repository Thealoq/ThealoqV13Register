const { Discord, client, MessageEmbed } = require("discord.js");
const config = require("../settings.json");
const moment = require("moment");
const ms = require("ms")
require("moment-duration-format");
moment.locale("tr");
exports.execute = async (member) => {
  let embed = new MessageEmbed().setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true })).setFooter(config.footer)
    .setColor(`#313136`)
  var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-999])/g)
  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
      return {
        "0": `<a:0_:931966145014136882>`,
        "1": `<a:1_:931966134708748338>`,
        "2": `<a:2_:931966117847642183>`,
        "3": `<a:3_:931966124315275354> `,
        "4": `<a:4_:931966114949386240> `,
        "5": `<a:5_:931966121815449732> `,
        "6": `<a:6_:931966129176445048> `,
        "7": `<a:7_:931966126584385586> `,  // sadece idleri değiş boşluk bırakma 
        "8": `<a:8_:931966141264429127>`,
        "9": `<a:9_:931966132007608330>`
      }[d];
    })
  }
  const thlq = member.guild.channels.cache.get(config.hg)
  if (member.user.username.includes(config.tag)) {
    await member.roles.set([config.family,config.unregister]).catch(() => false)
    member.setNickname(`${config.tag} İsim | Yaş`).catch(() => false)
  } else {
    member.roles.set([config.unregister]).catch(() => false)
    member.setNickname(`${config.tagsız} İsim | Yaş`).catch(() => false)
  } 
  if (Date.now() - member.user.createdAt < ms("7d")) {
    member.setNickname(`${config.tag} Şüpheli Hesap`).catch(() => false)
    member.roles.set([config.ceza])
    thlq.send(`<@${member.id}> - \`(${member.id})\` kişisinin hesabı 7 günden önce açıldığı için şüpheliye atıldı.`).catch(() => false )
  } else {
    thlq.send(`${member} <@&${config.registery}>`)
    thlq.send({
      embeds: [embed.setDescription(`
       Sunucumuza hoş geldin,  ${member} - (\`${member.id}\`)
           • Hesabın \`${moment(member.user.createdTimestamp).format("LLL")}\` tarihinde \`${moment(member.user.createdTimestamp).fromNow()}\` oluşturulmuş
           • Seninle Birlikte ${üyesayısı} kişi Oldu 
           • Sizlere <@&${config.registery}> Seninle İlgilenicekler
           • Sunucu kurallarımız <#kurallar kanalı id> kanalında belirtilmiştir.
          `)]
    }).catch(() => false )
  }


};
exports.conf = {
  event: "guildMemberAdd"
};
