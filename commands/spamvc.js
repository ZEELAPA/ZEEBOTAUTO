module.exports = {
    name: 'spamvc',
    description: "spam vccommand",
    async execute(client, message, args, Discord){
      const vc = args[0];
      const channel = client.channels.cache.get(vc);
      const cmvc = message.member.voice.channel
      
      if(message.member.permissions.has("MENTION_EVERYONE")){
        if(args[0]){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("WEWS DI MOD");
        channel.join();
        } else if (message.member.voice.channel){
	     	const connection = message.member.voice.channel.join();
	      } else if(!channel, !cmvc) {
        return message.channel.send('WEWS SAN LODS');
        } 
      

       if(args[1]){
         number = args[1]
       } else if(!args[1]){
         number = 250
       }

       setTimeout(function(){channel.leave()}, number);
       setTimeout(function(){channel.join()}, number * 2);
       setTimeout(function(){channel.leave()}, number * 3);
       setTimeout(function(){channel.join()}, number * 4);
       setTimeout(function(){channel.leave()}, number * 5);
       setTimeout(function(){channel.join()}, number * 6);
       setTimeout(function(){channel.leave()}, number * 7);
       setTimeout(function(){channel.leave()}, number * 8);
       setTimeout(function(){channel.join()}, number * 9);
       setTimeout(function(){channel.leave()}, number * 10);
       setTimeout(function(){channel.join()}, number * 11);
       setTimeout(function(){channel.leave()}, number * 12);
       setTimeout(function(){channel.join()}, number * 13);
       setTimeout(function(){channel.leave()}, number * 14);   
       setTimeout(function(){channel.leave()}, number * 15);
       setTimeout(function(){channel.join()}, number * 16);
       setTimeout(function(){channel.leave()}, number * 17);
       setTimeout(function(){channel.join()}, number * 18);
       setTimeout(function(){channel.leave()}, number * 19);
       setTimeout(function(){channel.join()}, number * 20);
       setTimeout(function(){channel.leave()}, number * 21);
  
     } else {
       message.channel.send('HAHA DI MODS')
     }
    }
}