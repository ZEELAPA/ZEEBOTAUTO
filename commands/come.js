module.exports = {
    name: 'come',
    description: "command the bot command",
    execute(client, message, args){

        const master = ["YES DADDY", 'YES MY LORD', 'I AM HERE SIR', 'AS YOU WISH', 'YOUR HIGHNESS', 'FATHER', 'HERE I AM']
    
        let random = Math.floor(Math.random() * master.length);
        const Guild = client.guilds.cache.get("714852915285852180");
        const Member = Guild.members.cache.get("457520402118475776"); 

        if(message.author.id != '457520402118475776'){
            return;
        } else if(message.author.id = '457520402118475776') {
            message.channel.send(master[random]);
        }

    }
}