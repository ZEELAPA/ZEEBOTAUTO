const distube = require('distube')

module.exports = {
    name: 'leave',
    aliases: ['dc'],
    description: "leave vc command",
    execute(client, message, args, Discord){
      const NoEmbed = {
        color: 0xFF0000,
        description:'Someone else is already listening to music in different channel!',
      }
      const Guild = message.guild
      const Memberb = Guild.members.cache.get('831121573594529843');
      
      const cmvc = message.member.voice.channel;
      if (!Memberb.voice.channel || Memberb.voice.channel.id === message.member.voice.channel.id){
        distube.voices.leave(message)
      } else if(Memberb.voice.channel.id !== message.member.voice.channel.id){
        return message.channel.send({embed: NoEmbed})
      }
	  }   
}