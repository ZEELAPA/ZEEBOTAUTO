module.exports = {
    name: 'vcdrag',
    aliases: ['vcd', 'vd'],
    description: "drag vc members sa isang pang vc",
    execute(client, message, args, Discord){
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            if(!args[0]) return message.channel.send('WALANG CHANNEL LODS');
            const Guild = message.guild
            const Member = Guild.members.cache.get(message.author.id);
            const channel = args[0];
            Member.voice.channel.members.forEach(members => {
                members.voice.setChannel(channel).then(() => message.react('801327690854170665')).catch((error) => {
                    message.channel.send('GG LODS MAY MALI');
                })
            })
        }else {
            message.channel.send('HAHA DI MOSDS');
        }
    }
}