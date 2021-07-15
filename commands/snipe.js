module.exports = {
    name: 'nipe',
    description: "snipe command",
    async execute(client, message, args, Discord){
      const msg = client.snipe.get(message.channel.id);
      if(!msg) return message.channel.send('GG LODS WALANG DELETED MESSAGE')
      
      const snipeEmbed = {
         color: 0xADD8E6,
         author: (msg.author.tag),
         title: 'SNIPED KA LODS PATAY',
         description: (msg.content),
         image: {
                url: (msg.image)
          },
         footer: {
             text: `MSG NI ${msg.author.tag}`,
         },
       };
      message.channel.send({embed: snipeEmbed});
    }
}