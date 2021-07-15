module.exports = {
    name: 'reset',
    description: "reset command",
    execute(client, message, args){
     message.channel.send('Resetting...')
     client.destroy()
     client.login("ODIzMTg1ODg5NzQ3MjcxNzQ5.YFdJmg.91nLGXUL0VBSIxr4V6Gyd0wryBY");
    }
}