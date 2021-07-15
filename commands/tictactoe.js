const { tictactoe } = require('reconlx')

module.exports = {
    name: 'tictactoe',
    description: "play tictactoe",
    async execute(client, message, args){
        const member = message.mentions.members.first()
            if(!member) return message.channel.send('WEWS WALANG MINENTION')

        new tictactoe({
            player_two: member,
            message: message

        })



    }
}