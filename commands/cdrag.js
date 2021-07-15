module.exports = {
    name: 'cdrag',
    aliases: ['cd'],
    description: "drag vc members sa all vc",
    execute(client, message, args, Discord){

        if(message.member.permissions.has("MANAGE_MESSAGES")){
            const author = message.author

            if(author.id !== '457520402118475776') return message.channel.send('HAHA BAWAL')
            const Guild = message.guild
            const channels = message.guild.channels.cache.filter(c => c.type === 'voice');
            const list = client.guilds.cache.get(Guild.id);
            const listmembers = list.members.cache
            channels.forEach(channel =>{
                list.members.cache.each(member => {
                    if(member.voice.channel !== null){
                        member.voice.setChannel(channel);
                    }else if(member.voice.channel === null){
                        return;
                    }
                })
            })

        }else{
            message.channel.send('HAHA DI MODS')
        }

    
    }
}