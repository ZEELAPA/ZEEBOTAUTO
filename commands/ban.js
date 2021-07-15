module.exports = {
    name: 'ban',
    aliases: ['ban'],
    description: "FAKE BAN",
    async execute(client, message, args, Discord){
      const ban = ['WEWS BOBO DI PWEDE EAN', 'OBOB MOMENTS', 'ANONG BAN BAN PUTANGINA MO DI Q ALAM KUNG PANO EAN GAWIN', 'BAN KA PA', 'LODS ANO EAN', 'WEWS', 'GG KA LODS'];

     let random = Math.floor(Math.random() * ban.length);

     const number = 1000

     const sentMessage = message.channel.send(`LOADING..`).then(msg => {
       {setTimeout(function(){msg.edit(`LOADING...`)}, number)}
       {setTimeout(function(){msg.edit(`LOADING..`)}, number * 2)}
       {setTimeout(function(){msg.edit(`LOADING...`)}, number * 3)}
       {setTimeout(function(){msg.edit(ban[random])}, number * 5)}
     });


     /* setTimeout(function(){ 
       message.channel.send('LOADING...')
     }, number); 
    
     setTimeout(function(){ 
       message.channel.send('LOADING..')
     }, number * 2); 

     setTimeout(function(){ 
       message.channel.send('LOADING...')
     }, number * 3); 
     
     setTimeout(function(){ 
       message.channel.send(ban[random])
     }, number * 5);  */
    }
}