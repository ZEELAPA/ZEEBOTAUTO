module.exports = {
    name: 'alldrag',
    aliases: ['ad'],
    description: "drag all members sa isang vc",
    execute(client, message, args, Discord){
        if(message.member.permissions.has("MANAGE_MESSAGES")){
          if(!args[0]) return message.channel.send('WALANG CHANNEL LODS');
          const guildid = message.guild.id;
          const channel = args[0];
          const list = client.guilds.cache.get(guildid);
          list.members.cache.each(member => {
              member.voice.setChannel(channel);
          })
        } else {
            message.channel.send('HAHA DI MOSDS');
        }
    }
}