module.exports = {
    name: 'testembed',
    description: "testembed command",
    execute(client, message, args, Discord){
        const exampleEmbed = {
            color: 0xADD8E6,
            title: 'KUNWARERULES',
            url: 'https://open.spotify.com/playlist/4CQs77AOjRfYeGjheH9gcg?si=ad59f5114e1f438a',
            fields: [
                {
                    name: 'Number 1', 
                    value: 'test',
                },
                {
                    name: 'repeatable', 
                    value: 'how??',
                },
                {
                    name: 'like', 
                    value: 'this',
                }
            ],
            image: {
                url: 'https://cdn.discordapp.com/avatars/655739930865172482/5216bc51ed277c59e12788c5f43cb329.png?size=256',
            },
            footer: {
                text: 'testfooter'
            },
        };
        message.channel.send({ embed: exampleEmbed });
    }
}