module.exports = {
    name: 'welcome',
    description: "welcome command",
    execute(client, message, args){
     const channelId = '823252853950775336';

     client.on('guildMemberAdd', (member) => {
       console.log(member);

       const message = 'WELCOME LODS';

       const channel =  member.guild.channels.cache.get(channelId);
       channel.send(message);
     });     
    }
}