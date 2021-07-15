module.exports = {
  name:'kkk',
  description: "kick a member",
  async execute(client, message, args, Discord){
    if(message.member.permissions.has("MANAGE_MESSAGES")){
     const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
     if (user === message.author) return message.channel.send('WEWS KA LODS BAWAL EAN');
     user.roles.remove(roles)

     user.user.send('HELLO PO PASENSYA PO ETO PO DISCORD SERVER INV LINK PABALIK');
     user.user.send('https://discord.gg/wu5rFU8C');
     await user.kick();
   }else{
     message.channel.send('HAHA DI MOSD');
   }
  }
}