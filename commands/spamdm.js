module.exports = {
    name: 'spamdm',
    description: "spam someone's dm command",
    async execute(client, message, args){
     if(message.member.permissions.has("MANAGE_MESSAGES")){

       const zee = message.guild.members.cache.get('457520402118475776').user
  
       let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
       if(user.id === '457520402118475776') return message.channel.send('HAHA BAWAL')
       if(!user) return message.channel.send("WEWS WALANG MINENTION");
       if(!args.slice(1).join(' ')) return message.channel.send("WEWS WALANG MESSAGE");

       const number = 1000
        user.user.send(args.slice(1).join(' ')).catch(() => message.channel.send("WEWS DI PEDE IMESSAGE")).then(() =>
       message.react('801327690854170665'));

       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 2); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 3); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 4); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 5); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 6); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 7); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 8); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 9); 
       setTimeout(function(){user.user.send(args.slice(1).join(' '))}, number * 10); 

       
       
     }else{
       message.channel.send('HAHA DI MODS');
     }
    }
}
