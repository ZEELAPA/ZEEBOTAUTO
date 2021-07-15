module.exports = {
    name: 'ping',
    description: "ping command",
    async execute(client, message, args){
       if (message.mentions.users.first()) {
            user = message.mentions.users.first();
       } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]);
       } else {
            user = message.author;
       }
       
     if(!user) return message.channel.send('WEWS DI USER');
   
     await message.channel.send(`<@${user.id}>`)
    }
}
