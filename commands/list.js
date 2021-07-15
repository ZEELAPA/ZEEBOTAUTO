module.exports = {
    name: 'list',
    description: "list command",
    async execute(client, message, args, Discord){
     const ChannelID = message.channel.id;
     const guildid = message.guild.id;
     const user = message.guild.members.cache.get('457520402118475776').user

     if (message.channel.id !== '845437435190312989'){
       message.channel.send('WEWS KA LODS BAWAL DITO')
     } else {
       const list = client.guilds.cache.get(guildid); 
       message.channel.send(`<@${user.id}>`)
       list.members.cache.each(member => message.channel.send(member.user.tag)); 
       await message.channel.send('TAPOS NA EUNG LIST LODS');
     }
    }
}