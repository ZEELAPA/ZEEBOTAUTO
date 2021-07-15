module.exports = {
    name: 'leave',
    aliases: ['dc'],
    description: "leave vc command",
    execute(client, message, args, Discord){
      const vc = args.slice(0).join(' ');
      const Channel = client.channels.cache.get(vc);
      const cmvc = message.member.voice.channel;
      
      if(args.slice(0).join(' ')){
        Channel.leave();
      } else if (message.member.voice.channel) {
	     	message.member.voice.channel.leave();
	    } else if (!args.slice(0).join(' ')){
        return message.channel.send('WEWS SAAN LODS')
        Channel.leave();
      }
	  }   
}