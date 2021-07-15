module.exports = {
    name: 'dds',
    description: "dds command",
    execute(client, message, args){
        message.channel.send('discord.gg/dds');
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }
        message.channel.send(user.username);
        message.react('801327690854170665');
    }
}