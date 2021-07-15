module.exports = {
    name: 'rainbow',
    description: "rainbow role command",
    execute(client, message, args){
     var colors = ['#8585ff','#fff681','#a073fd','#fd73b9'];
        var random = Math.floor(Math.random() * colors.length);
        var role = message.guild.roles.cache.find(role => role.name === 'ZEEBOT')
        setInterval(() => {
          role.edit({
          color: colors[random]
        })
        }, 5000);
    }
}
