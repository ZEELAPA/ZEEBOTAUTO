module.exports = {
    name: 'join',
    description: "join vc command",
    async execute(client, message, args, Discord){

      const vc = args.slice(0).join(' ');
      const channel = client.channels.cache.get(vc);
      const cmvc = message.member.voice.channel
            
      if(args.slice(0).join(' ')){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("WEWS DI MOD");
        channel.join();
      } else if (message.member.voice.channel){
	     	const connection = await message.member.voice.channel.join();
	    } else if(!channel, !cmvc) {
        return message.channel.send('WEWS SAN LODS');
      } 
    }
}