const Discord = require('discord.js');
const client = new Discord.Client();
const translate = require('@iamtraction/google-translate');
const urbdic = require('urban-dictionary');
const Owblot = require('owlbot-js');
const randomWords = require('random-words');
require('dotenv').config();

const ards = require("ards-client")
const ardsClient = new ards.Client();

const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('tls');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.snipe = new Discord.Collection();

const guildInvites = new Map();

['commandsz', 'events'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
});

client.on('inviteCreate', async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));

client.on('ready', ready => {
  client.channels.cache.get('845437435190312989').send(`ONLINE NA PO AKO`);
    client.guilds.cache.forEach(guild => {
      guild.fetchInvites()
        .then(invites => guildInvites.set(guild.id, invites))
        .catch(err => console.log(err));
    });
})

client.on('guildMemberAdd', async guildMember =>  {
  setTimeout(function(){ 
    const Guild = client.guilds.cache.get("714852915285852180");
    const zeebotguild = client.guilds.cache.get("823252853950775336");
    const zbchannel = client.channels.cache.get('860843133503537172');
    guildMember.guild.channels.cache.get('845418054787006496').send(`WELCOME PO LODS <@${guildMember.user.id}>!! MAKE SURE TO READ THE RULES IN <#715143694063501363>! YOU CAN ALSO GET YOUR ROLES IN <#845419288591728661>!`);
  }, 3000)

  const cachedInvites = guildInvites.get(guildMember.guild.id);
    const newInvites = await guildMember.guild.fetchInvites();
    guildInvites.set(guildMember.guild.id, newInvites);
    try {
      const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
      const zbchannel = client.channels.cache.get('860843133503537172');
      if(zbchannel) {
        zbchannel.send(`NAGJOIN SI **${guildMember.user.tag}** DAHIL KAY **${usedInvite.inviter.tag}** NA MAY **${usedInvite.uses}** INVITES NA!! **ID:${guildMember.user.id}**`).catch(err => console.log(err));
      }
    }
    catch(err) {
      console.log(err);
    }
});

client.on('voiceStateUpdate', (oldMember, newMember) =>{
  const Guild = client.guilds.cache.get("714852915285852180");
  const Member = Guild.members.cache.get("457520402118475776");
  const bengt = Guild.members.cache.get("312589714316066816");
  const ruler =  Guild.members.cache.get("580199565697744917")// Getting the member.

  if (bengt.voice.channel) { // Checking if the member is connected to a VoiceChannel.
      // The member is connected to a voice channel.
      // https://discord.js.org/#/docs/main/stable/class/VoiceState
      /* setTimeout(function(){
        bengt.voice.setChannel(null)
      }, 750) */
  }/* else if (Member.voice.channel){
    Member.voice.channel.members.filter(member => member.id !== '457520402118475776').forEach(members => {
      members.voice.setChannel('845437292512018453')
      console.log('nice')
    })
  } */
})

/* client.on('voiceStateUpdate', async (oldState, newState) => {
  const Guild = client.guilds.cache.get("714852915285852180");
  const Member = Guild.members.cache.get("457520402118475776");
  const channel = Guild.channels.cache.get('845437292512018453')
  if (Member.voice.channel === channel){ 
    Member.voice.channel.members.filter(member => member.id !== '457520402118475776').forEach(members => {
      members.voice.setMute(false)
      console.log('nice')
    });
  } else if (Member.voice.channel) { 
    const idnt = Member.voice.channel.members.map(member => member.id);
    Member.voice.channel.members.filter(member => member.id !== '457520402118475776').forEach(members => {
      members.voice.setMute(true)
      console.log('nice')
    });
  } 
}); */

client.on('guildBanAdd', async (guild, user) => {
  
  const Guild = client.guilds.cache.get("714852915285852180");
  const zeebotguild = client.guilds.cache.get("823252853950775336");
  const zbchannel = client.channels.cache.get('860842874458341376');
  const Member = Guild.members.cache.get("457520402118475776");
  const entry = await Guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first())

  Member.user.send(`GG LODS NABAN SI ${entry.target} TAS EUNG REASON "${entry.reason}"`)
  const bannedEmbed = {
    color: 0xADD8E6,
    author: {
      name: 'MAY NA BAN',
      icon_url: 'https://media.discordapp.net/attachments/823252853950775340/854508587149819934/e918cc70-6508-4e15-abed-0e823e34b9b2.png?width=112&height=112',
      url: 'https://discord.gg/dds',
    },
    fields: [
      {
        name:  `NABAN SI:`, 
        value: `${entry.target}`,
      },
      {
        name: `BINAN NI:`, 
        value: `${entry.executor}`,
      },
      {
        name: `REASON:`, 
        value: `${entry.reason}`,
      },
    ],
    footer: {
      text: `ID: ${entry.target.id}`
    },
  };
  zbchannel.send({ embed: bannedEmbed });
})

client.on("guildBanRemove", async (guild, user) => { 
  const Guild = client.guilds.cache.get("714852915285852180");
  const zeebotguild = client.guilds.cache.get("823252853950775336");
  const zbchannel = client.channels.cache.get('860842949226790922');
  const entry = await Guild.fetchAuditLogs({type: 'MEMBER_BAN_REMOVE'}).then(audit => audit.entries.first());

  zbchannel.send(`NAUNBAN SI ${entry.target}, ID: ${entry.target.id}`)
})


client.login(process.env.DISCORD_TOKEN)