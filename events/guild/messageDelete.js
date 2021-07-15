module.exports = (Discord, client, message) => {
  
  client.snipe.set(message.channel.id, {
    channel: message.channel,
    content: message.content,
    author: message.author,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })

  const msg = client.snipe.get(message.channel.id);
  const zbchannel = client.channels.cache.get('864524302060879913');
  var currentDate = message.createdAt;
  if(msg.author.bot) return
  const snipeEmbed = {
    color: 0xADD8E6,
    author: {
      name: `MSG NI ${msg.author.tag} SA ${msg.channel.name}`,
      icon_url: 'https://media.discordapp.net/attachments/823252853950775340/854508587149819934/e918cc70-6508-4e15-abed-0e823e34b9b2.png?width=112&height=112',
      url: 'https://discord.gg/dds',
    },
    title: 'SNIPED KA LODS PATAY',
    description: (msg.content),
    image: {
           url: (msg.image)
     },
    footer: {
        text: `SENT AT ${(currentDate.getHours()) + ":" + currentDate.getMinutes()}`,
    },
  };
  zbchannel.send({embed: snipeEmbed});

}