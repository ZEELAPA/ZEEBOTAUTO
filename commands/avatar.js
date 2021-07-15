module.exports = {
    name: 'avatar',
    aliases: ['av'],
    description: "para sa avatar",
    execute(client, message, args, Discord){
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }
        
      const pog = message.author
      if(!user) return message.channel.send('WEWS WALANG USER')


        const avembed = {
            color: 0xADD8E6,
            title: `EPIC AVATAR NI ${user.tag}`,
            image: {
                url: user.displayAvatarURL({size: 4096, dynamic: true})
            },

            footer: {
                text: `INAVATAR NI @${message.author.tag}`,
                icon_url: pog.displayAvatarURL({size: 4096, dynamic: true}),
            }
        };

        message.channel.send({embed: avembed});
    }
}