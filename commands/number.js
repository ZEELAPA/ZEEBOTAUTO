module.exports = {
    name: 'number',
    aliases: ['num', 'n'],
    description: "number command",
    execute(client, message, args){
      const numbers = ['https://www.freeiconspng.com/thumbs/number-1-png/circle-blue-number-1-png-12.png', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Linea_2.png', 'https://upload.wikimedia.org/wikipedia/commons/2/26/MRT_Singapore_Destination_3.png', 'https://upload.wikimedia.org/wikipedia/commons/2/28/MRT_Singapore_Destination_4.png', 'https://upload.wikimedia.org/wikipedia/commons/4/43/MRT_Singapore_Destination_5.png', 'http://pngimg.com/uploads/number6/number6_PNG18595.png', 'https://upload.wikimedia.org/wikipedia/commons/7/7e/MRT_Singapore_Destination_7.png', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/MRT_Singapore_Destination_8.png', 'https://upload.wikimedia.org/wikipedia/commons/f/fe/MRT_Singapore_Destination_9.png', 'http://www.pngmart.com/files/14/10-Number-PNG-File.png'];

     let random = Math.floor(Math.random() * numbers.length);

     message.channel.send(numbers[random]);
    }
  }
