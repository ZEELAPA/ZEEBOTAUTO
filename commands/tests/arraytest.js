module.exports = {
    name: 'array',
    description: "array test command",
    execute(client, message, args){
      const months = ["January", "February", "March", "April", "May", "June", "July"];

     let random = Math.floor(Math.random() * months.length);

     console.log(random, months[random]);

     message.channel.send(months[random]);
    }
  }
