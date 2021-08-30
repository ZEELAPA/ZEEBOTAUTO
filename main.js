const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const Distube = require('distube')

const ards = require("ards-client")
const ardsClient = new ards.Client();

const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.snipe = new Discord.Collection();
client.distube = new Distube.default(client, { searchSongs: 0, emitNewSongOnly: false});

const guildInvites = new Map();



['commandsz', 'events'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
});

client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));


client.distube

.on("playSong", (queue, song) => {
    let playingEmbed = new Discord.MessageEmbed()
    .setColor("#79a4f8")
    .setTitle(`Now Playing`)
    .setDescription(`[${song.name}](${song.url}) [${song.user}]`)
    if(song.playlist){
        queue.textChannel.send(`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``)
    }else{
        queue.textChannel.send(playingEmbed)
    }
    
})
.on("addSong", (message, queue, song) => {
    let queueEmbed = new Discord.MessageEmbed()
    .setColor("#79a4f8")
    .setDescription(`Queued [${song.name}](${song.url}) [${song.user}]`)
    queue.textChannel.send(queueEmbed)
})

.on("addList", (message, queue, playlist) => queue.textChannel.send(
    `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`
))
// DisTubeOptions.searchSongs = true
.on("searchResult", (message, result) => {
    let i = 0;
    queue.textChannel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
})
// DisTubeOptions.searchSongs = true
.on("searchCancel", (message) => queue.textChannel.send(`**Searching canceled!**`))
.on("error", (message, e) => {
    console.error(e)
    channel.send("An error encountered: " + e);
});



client.login('ODMxMTIxNTczNTk0NTI5ODQz.YHQoSA.uuDfR3cxtF1X6EmOXwwSwzBO2b8')