module.exports = {
    name: 'pinglist',
    description: "pinglist command",
    async execute(client, message, args, Discord){
     if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("HAHA DI MODS");
     
     const channels = ['845510327473799219', '845422079460638770']
     const membid = message.member.id
     const ChannelID = message.channel.id;
     const guildid = message.guild.id;
     const user = message.guild.members.cache.get('457520402118475776').user

     if (message.channel.id === '847134729668395048'){
       const list = client.guilds.cache.get(guildid); 
       message.channel.send(`<@${user.id}>`)
       list.members.cache.each(member => message.channel.send(`<@${member.user.id}> HAPPY ANNIVERSARY SA DDS!!`)); 
       await message.channel.send('HAPPY ANNIVERSARY MGA KA-DDS!!');
     } else {
       message.channel.send('WEWS KA LODS BAWAL DITO')
     }
    }
}