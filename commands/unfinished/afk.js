module.exports = {
    name: 'afk',
    description: "afk nickname command",
    execute(client, message, args, Discord){
      if (message.mentions.users.first()) {
        User = message.mentions.users.first();
      } else if (args[0]) {
        User = message.member;
      } else {
        User = message.author;
      }
      
      message.guild.members.cache.get(User.id).setNickname(`[AFK] ${User.username}`)
      
      /* const afk = 'AFK'

      User.setNickname(afk);
     */
    }
}