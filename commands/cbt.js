module.exports = {
    name: 'cbt',
    description: "cbt command",
    execute(client, message, args, Discord){
        const cbtEmbed = {
            color: 0x7CB54E,
            title: 'CBTITTIES',
            image: {
                url: 'https://cdn.discordapp.com/attachments/779582494747131914/826414256836575242/image0.jpg'
            },
            footer: {
                text: 'HEHECBTITTIES'
            },
        };
        message.channel.send({ embed: cbtEmbed });
    }
}