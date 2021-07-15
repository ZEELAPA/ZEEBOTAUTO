module.exports = {
    name: 'rping',
    description: "random ping command",
    async execute(client, message, args){
     if(message.member.permissions.has("MENTION_EVERYONE")){

       const Guild = message.member.guild;
       const randomuser = Guild.members.cache.map(member => member.id);
       
       const random = await Math.floor(Math.random() * randomuser.length);
       console.log(randomuser[random]);
       message.channel.send(`<@${randomuser[random]}>`)
    /*  .then(msg => {
        msg.delete({ timeout: 1000 })
     }) */
     
     } else {
       message.channel.send('WEWS DI MODS');
     }
    }
}