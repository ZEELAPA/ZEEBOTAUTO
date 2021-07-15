module.exports = {
    name: 'test',
    description: "test command",
    async execute(client, message, args){
        message.channel.send('TESTTEST');
        const guildid = message.guild.id;
        const list = message.guild.memberCount;
        message.channel.send(`MEMBERCOUNT: ${list}`);
    }
}