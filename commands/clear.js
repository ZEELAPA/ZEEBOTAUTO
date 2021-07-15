module.exports = {
    name: 'clear',
    description: "clear messages",
    async execute(client, message, args){
       if(message.member.permissions.has("MANAGE_MESSAGES")){
         if(!args[0]) return message.channel.send("WAG KUNG ANO ANO LODS DAPAT NUMBER LANG");
         if(isNaN(args[0])) return message.channel.send("WALANG LAMAN LODS");
 
         if(args[0] > 100) return message.channel.send("WAG NAMAN SOBRA SA 100 LODS");
         if (args[0] < 1) return message.channel.send("LODS BAT MAS MABABA SA 1");  
   
         await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
           message.channel.bulkDelete(messages)
         });
       } else {
          message.channel.send('WEWS DI MODS');
       }
    }
}