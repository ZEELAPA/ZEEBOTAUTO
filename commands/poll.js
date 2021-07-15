module.exports = {
    name: 'poll',
    aliases: ['pl'],
    description: "poll command",
    async execute(client, message, args, Discord){
      let pollDescription = args.slice(0).join(' ');
      if(!pollDescription) return message.channel.send('WEWS WALANG MESSAGE');

      const pollEmbed = {
         color: 0xADD8E6,
         title: 'POLL',
         description: (pollDescription),
         footer: {
             text: `POLL BY ${message.author.tag}`,
         },
       };

      message.channel.send({embed: pollEmbed}).then(embed => {
         embed.react('👍');
         embed.react('👎');
      })
    }
  }
