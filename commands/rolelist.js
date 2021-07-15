module.exports = {
    name: 'rolelist',
    description: "list members w/ c/ role",
    async execute(client, message, args, Discord){


      const roleid = args[0]
      if(!args[0]) return message.channel.send('WEWS WALANG ROLE ID NA BINIGAY');
      const roleidd = message.guild.roles.cache.get(role => role.id == roleid);
      message.guild.members.cache.filter(member => member.roles === roleid).forEach(membroles => {
        message.channel.send(membroles)
        console.log(membroles)
      })
      message.guild.members.cache.filter(member => member.roles == roleidd).forEach(member => {
        console.log(member.tag)
      })


     /* const roleEmbed = {
       color: 0xADD8E6,
       title: `MGA TAONG MAY ${memberwrole} NA ROLE`,
       description: `${memberwrole}`,
     }
     message.channel.send({ embed: roleEmbed }); */
      
  }
}