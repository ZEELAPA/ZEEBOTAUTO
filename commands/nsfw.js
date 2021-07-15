const ards = require("ards-client")
const ardsClient = new ards.Client();

module.exports = {
    name: 'nsfw',
    description: "send nsfw",
    async execute(client, message, args, Discord){
        const bastos = ["BASTUSAN NA!", "EPIC BASTOS TIME!", "BASTOS KA!", "WEWS BASTOS", "BAST2S!"]
        let random = Math.floor(Math.random() * bastos.length);

        if (message.channel.nsfw) {
            const zeroes = args[0];
            const zeroescapped = await zeroes.toUpperCase();

            if(zeroes === "BOOBS"){
                ardsClient.porn.boobs().then(request => {
                    const nsfwEmbed = {
                        color: 0xADD8E6,
                        title: `${bastos[random]}`,
                        image: {
                            url: request.image,
                        },
                    };
                    message.channel.send({ embed: nsfwEmbed });
                }).catch(error => {
                    message.channel.send(`LODS MAY ERROR "${error}"`);
                });
            } else if(zeroes === "ASS"){
                ardsClient.porn.ass().then(request => {
                    const nsfwEmbed = {
                        color: 0xADD8E6,
                        title: `${bastos[random]}`,
                        image: {
                            url: request.image,
                        },
                    };
                    message.channel.send({ embed: nsfwEmbed });
                }).catch(error => {
                    message.channel.send(`LODS MAY ERROR "${error}"`);
                });
            } else if(zeroes === "PANTIES"){
                ardsClient.porn.panties().then(request => {
                    const nsfwEmbed = {
                        color: 0xADD8E6,
                        title: `${bastos[random]}`,
                        image: {
                            url: request.image,
                        },
                    };
                    message.channel.send({ embed: nsfwEmbed });
                }).catch(error => {
                    message.channel.send(`LODS MAY ERROR "${error}"`);
                });
            } else if(zeroes === "PUSSY"){
                ardsClient.porn.pussy().then(request => {
                    const nsfwEmbed = {
                        color: 0xADD8E6,
                        title: `${bastos[random]}`,
                        image: {
                            url: request.image,
                        },
                    };
                    message.channel.send({ embed: nsfwEmbed });
                }).catch(error => {
                    message.channel.send(`LODS MAY ERROR "${error}"`);
                });
            } else if(zeroes === "THIGHS"){
                ardsClient.porn.thighs().then(request => {
                    const nsfwEmbed = {
                        color: 0xADD8E6,
                        title: `${bastos[random]}`,
                        image: {
                            url: request.image,
                        },
                    };
                    message.channel.send({ embed: nsfwEmbed });
                }).catch(error => {
                    message.channel.send(`LODS MAY ERROR "${error}"`);
                });
            }           
        } else {
            message.channel.send("WEWS DI NSFW EUNG CHANNEL");
        } 
    }
}