module.exports = {
    name: 'everydrag',
    aliases: ['evd', 'ed'],
    description: "drag vc members sa all vc",
    execute(client, message, args, Discord){
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            if(!args[0]) return message.channel.send('WALANG TAO LODS BAKET GANON')
            const Guild = message.guild
            const channels = message.guild.channels.cache.filter(c => c.type === 'voice');
            channels.forEach(channel =>{
                setTimeout(function(){user.voice.setChannel(channel)}, 1000); 
            })

        }else{
            message.channel.send('HAHA DI MODS')
        }
    }
}