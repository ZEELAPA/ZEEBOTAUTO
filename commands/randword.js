const randomWords = require('random-words');

module.exports = {
    name: 'randomword',
    aliases: ['rw', 'randword'],
    description: "send random word",
    async execute(client, message, args){
        console.log(randomWords());
        message.channel.send(randomWords().toUpperCase())
        }
    }