module.exports = {
    name: 'countdown',
    aliases: ['cdown', 'cd'],
    description: "countdown command",
    async execute(client, message, args){
    
    const number = 1500

    message.channel.send(`10`);

    setTimeout(function(){ 
     message.channel.send('9')
    }, number); 
    
    setTimeout(function(){ 
     message.channel.send('8')
    }, number * 2); 

    setTimeout(function(){ 
     message.channel.send('7')
    }, number * 3); 

    setTimeout(function(){ 
     message.channel.send('6')
    }, number * 4); 

    setTimeout(function(){ 
     message.channel.send('5')
    }, number * 5); 

    setTimeout(function(){ 
     message.channel.send('4')
    }, number * 6); 

    setTimeout(function(){ 
     message.channel.send('3')
    }, number * 7); 

    setTimeout(function(){ 
     message.channel.send('2')
    }, number * 8); 

    setTimeout(function(){ 
     message.channel.send('1')
    }, number * 9); 
    }
}
