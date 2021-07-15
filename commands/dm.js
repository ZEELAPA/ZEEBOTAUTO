module.exports = {
    name: 'dm',
    description: "dm a user",
    async execute(client, message, args){
     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
     if(!user) return message.channel.send("WEWS WALANG MINENTION");
     if(!args.slice(1).join(' ')) return message.channel.send("WEWS WALANG MESSAGE");

     user.user.send(args.slice(1).join(' ')).catch(() => message.channel.send("WEWS DI PEDE IMESSAGE")).then(() =>
     message.channel.send("NICE NASEND NA"));

     await message.channel.messages.fetch({limit: 1}).then(messages =>{
       message.channel.bulkDelete(messages)
      });
    }
}
