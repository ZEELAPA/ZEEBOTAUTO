module.exports = {
    name: 'sv',
    description: "spam message command",
    async execute(client, message, args){
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

       if(args[2]){
         length = args[2]
       } else if(!args[2]){
         length = 10000
       }
       
       const jon = number * 2
       
       var intervs = setInterval(function(){
         setTimeout(function(){channel.join()}, number);
         setTimeout(function(){channel.leave()}, number * 2);
       }, jon);

       setTimeout(function(){clearInterval(intervs)}, length)
     }else {
       message.channel.send('HAHA DI MODS')
     }
    }
}