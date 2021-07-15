module.exports = {
    name: 'caps',
    aliases: ['cap'],
    description: "captial a message",
    async execute(client, message, args){
        if(!args.slice(0).join(' ')) return message.channel.send("WEWS WALANG MESSAGE");
        const capped = args.slice(0).join(' ').toUpperCase();

        message.channel.send(capped)
    }
}