var Owblot = require('owlbot-js');
var owlclient = Owblot('20f3723a4fabcf090dc1faeeb250fb0219e77dc0');

module.exports = {
    name: 'dic',
    description: "urban dictionary",
    async execute(client, message, args, Discord){
        const numberewan = 1
        if(!args.slice(0).join(' ')) return message.channel.send("WEWS WALANG MESSAGE");
        
        owlclient.define(args.slice(0).join(' ')).then(function(result){
            const resultata = [result]
            console.log(result);
            
            if(!result.definitions[1]){
                const OwlEmbed = {
                    color: 0xADD8E6,
                    author: {
                        name: 'DEFINITIONS',
                        icon_url: 'https://media.discordapp.net/attachments/823252853950775340/854508587149819934/e918cc70-6508-4e15-abed-0e823e34b9b2.png?width=112&height=112',
                        url: 'https://discord.gg/dds',
                    },
                    fields: [
                        {
                            name: `${result.definitions[0].type.toUpperCase()}`, 
                            value: `${result.definitions[0].definition.toUpperCase()}`,
                        },
                    ],
                };
                message.channel.send({ embed: OwlEmbed });
            } else if(result.definitions[1]){
                const OwlEmbed = {
                    color: 0xADD8E6,
                    author: {
                        name: 'DEFINITIONS',
                        icon_url: 'https://media.discordapp.net/attachments/823252853950775340/854508587149819934/e918cc70-6508-4e15-abed-0e823e34b9b2.png?width=112&height=112',
                        url: 'https://discord.gg/dds',
                    },
                    fields: [
                        {
                            name: `${result.definitions[0].type.toUpperCase()}`, 
                            value: `${result.definitions[0].definition.toUpperCase()}`,
                        },
                        {
                            name: `${result.definitions[1].type.toUpperCase()}`, 
                            value: `${result.definitions[1].definition.toUpperCase()}`,
                        },
                    ],
                };
                message.channel.send({ embed: OwlEmbed });
            }
        }).catch((error) => {
            message.channel.send('WALA PONG GANYAN DITO TRY MO PO ZDICUB FOR ALT DIC');
        })
    }
}
