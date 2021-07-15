module.exports = {
    name: 'stfu',
    description: "mute everyone in my vc",
    async execute(client, message, args){
        if(message.author.id !== '457520402118475776') return message.channel.send('HAHA DI PWEDE');
        const Guild = client.guilds.cache.get("714852915285852180");
        const Member = Guild.members.cache.get("457520402118475776");
        if(!args[0]){
            const Number = 5000 
        } else {
            const Number = args[0]
        }
        if(!Member.voice.channel) return message.channel.send('WALA KA SA VC LODS');
        
        Member.voice.channel.members.filter(member => member.id !== '457520402118475776').forEach(members => {
            setTimeout(function(){
                members.voice.setMute(true)
            }, 500);
            setTimeout(function(){
                members.voice.setMute(false)
            }, Number)
            message.react('801327690854170665');
        }); 
    }
}