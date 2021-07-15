module.exports = {
    name: 'drag',
    description: "spam move someone command",
    async execute(client, message, args){
     if(message.member.permissions.has("MANAGE_MESSAGES")){
       let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

       if(!user) return message.channel.send("WEWS WALANG MINENTION");
       if(user.id === '457520402118475776') return message.channel.send('HAHA BAWAL')        

       const number = 1500
       user.voice.setChannel('730764963051864115').catch(() => console.log("NICE DI NAGANA")).then(() =>
       message.delete
       )

        
        setTimeout(function(){user.voice.setChannel('845420958747197460')}, number);
        setTimeout(function(){user.voice.setChannel('845470377781493800')}, number * 2);
        setTimeout(function(){user.voice.setChannel('845422387599507466')}, number * 3); 
        setTimeout(function(){user.voice.setChannel('845422496382976020')}, number * 4); 
        setTimeout(function(){user.voice.setChannel('845422949623398450')}, number * 5); 
        setTimeout(function(){user.voice.setChannel('845424220452028436')}, number * 6);
        setTimeout(function(){user.voice.setChannel('845424243884949504')}, number * 7);
        setTimeout(function(){user.voice.setChannel('845437292512018453')}, number * 8);
        setTimeout(function(){user.voice.setChannel(null)}, number * 9);

          
     }else{
       message.channel.send('HAHA DI MODS');
     }
    }
}