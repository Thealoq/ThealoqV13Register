const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const client = new Client({ intents: [32767] });
const config =  require("../settings.json")
const mongoose = require("mongoose");
const { joinVoiceChannel } = require('@discordjs/voice');


class Login {   
    static  botLogin(token) {
        client.login(token).then(e => console.log(`${client.user.username} Bağlandı`)).catch(e => console.error(e));

    }
    static getClient() {
        return client;
    }
    static  async connectMongo(url) {
        mongoose.connect(url, {
            useNewUrlParser: true,
            autoIndex: true,
            connectTimeoutMS: 10000,
            family: 4
        }).then(console.log("Mongoya Bağlandı")).catch(e => console.error(e));
    }
    static getMongo() {
        return mongoose
    }
}

function voiceConnect(channel) {
    try {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
    } catch (error) {
        throw error;
    }
}

client.on('ready', async () => {
    let channel = client.channels.cache.get(config.voice)
    client.user.setPresence({ activities: [{ name: config.footer },{ name: config.footer2 }], status: 'idle' });
    voiceConnect(channel)
});

module.exports = Login
