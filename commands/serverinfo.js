module.exports = {
    name: 'serverinfo',
    aliases: [],
    description: 'server info',
    async execute (client, message, args, Discord){
        const serverinfoEmbed = {
          title: message.guild.name,
          thumbnail: {
            url: message.guild.iconURL({ dynamic: true })
          },
          color: 0xADD8E6,
          fields: [
              {
                  name: '**OWNER**', 
                  value: `bengt#5736 : 312589714316066816`,
                  inline: false
              },
              {
                  name: 'Member Count', 
                  value: `${message.guild.memberCount}`,
                  inline: true
              },
              {
                  name: 'Created',
                  value: message.guild.createdAt.toLocaleString(),
                  inline: true
              },
            ]
        
        
        };


        /* 
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        const serverinfoEmbed = {
            color: 0xADD8E6,
            description: (`**Server Info**`),
            thumbnail: {
                url: message.guild.iconURL({ dynamic: true })
            },
            fields: [
                {
                    name: 'General',
                    value:
                         `**Name:** ${message.guild.name},
                         **ID:** ${message.guild.id},
                         **Owner:** ${message.guild.owner.user.tag} (${message.guild.owner.id}),
                         **Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}],`
                    ,
                    inline: true     
                }
            ]
/* 
             .addField('Statistics', [
                 `**Role Count:** ${roles.length}`,
                 `**Emoji Count:** ${emojis.size}`,
                 `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
                 `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
                 `**Member Count:** ${message.guild.memberCount}`,
                 `**Humans:** ${members.filter(member => !member.user.bot).size}`,
                 `**Bots:** ${members.filter(member => member.user.bot).size}`,
                 `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
                 `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
                 `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
                 '\u200b'
             ])
             .addField('Presence', [
                 `**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
                 `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
                 `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
                 `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
                 '\u200b'
             ])
             .addField(`Roles [${roles.length - 1}]`, roles.join(', '))
    
            .setTimestamp(); */
        message.channel.send({ embed: serverinfoEmbed });
    }
}

    