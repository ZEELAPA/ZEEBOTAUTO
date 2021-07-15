module.exports = {
    name: 'spamping',
    aliases: ['sping', 'sp'],
    description: "spam vccommand",
    async execute(client, message, args, Discord){
      
      
      if(message.member.permissions.has("MENTION_EVERYONE")){
        const number = 1000
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(user.id === '457520402118475776') return message.channel.send('HAHA BAWAL')
        if(!user) return message.channel.send('WEWS WALANG MINENTION')
        message.channel.send(`<@${user.id}>`);
        setTimeout(function(){message.channel.send(`<@${user.id}>`)}, number); 
        setTimeout(function(){message.channel.send(`<@${user.id}>`)}, number * 2); 
        setTimeout(function(){message.channel.send(`<@${user.id}>`)}, number * 3); 
        setTimeout(function(){message.channel.send(`<@${user.id}>`)}, number * 4);     


      }else{
          message.channel.send('HAHA DI MODS');
      }
    }
}