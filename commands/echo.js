module.exports = {
    name: 'echo',
    aliases: ['ec'],
    description: "echo messages",
    async execute(client, message, args){
       if(message.member.permissions.has("MANAGE_MESSAGES")){
         const channelname = message.mentions.channels.first();/* client.channels.cache.get(channel = channel.name === args[0]); */
         const echoed = args.slice(1).join(' ');

         if(!args[0]) return message.channel.send('WEWS WALANG CHANNEL');
         if(!args.slice(1).join(' ')) return message.channel.send("WEWS WALANG MESSAGE");
         await channelname.send(echoed).catch(() => message.channel.send("WEWS DI PEDE IMESSAGE")).then(() =>
           message.react('801327690854170665'));
       } else {
           message.channel.send('HAHA DI MODS')
       }
    }
}