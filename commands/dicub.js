const urbdic = require('urban-dictionary')

module.exports = {
    name: 'dicub',
    description: "urban dictionary",
    execute(client, message, args, Discord){
        if(!args.slice(0).join(' ')) return message.channel.send("WEWS WALANG MESSAGE");
 
        urbdic.define(args.slice(0).join(' ')).then((results) => {
         const OwlEmbed = {
            color: 0xADD8E6,
            author: {
                name: 'DEFINITIONS',
                icon_url: 'https://media.discordapp.net/attachments/823252853950775340/854508587149819934/e918cc70-6508-4e15-abed-0e823e34b9b2.png?width=112&height=112',
                url: 'https://discord.gg/dds',
            },
            fields: [
                {
                    name: `${results[0].word.toUpperCase()}`, 
                    value: `${results[0].definition.toUpperCase()}`,
                },
                {
                    name: `${results[1].word.toUpperCase()}`, 
                    value: `${results[1].definition.toUpperCase()}`,
                },
                {
                    name: `${results[2].word.toUpperCase()}`, 
                    value: `${results[2].definition.toUpperCase()}`,
                },
            ],
         };
        message.channel.send({ embed: OwlEmbed });
        }).catch((error) => {
          message.channel.send('WALA PONG GANYAN DITO TRY MO PO ZDIC FOR ORIG DIC');
        })
    }
}
