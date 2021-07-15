module.exports = {
    name: 'timecheck',
    aliases: ['tc'],
    description: "timecheck command",
    execute(client, message, args, Discord){
     const brands = ['Jollibee', 'Mcdonalds', 'Caltex', 'Petron', 'Burger King', 'Boysen', 'Geico', 'Nike', 'Adidas', 'Ford'];
     const img = ['https://1000logos.net/wp-content/uploads/2019/03/jollibee-logo-png.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png', 'https://seeklogo.com/images/C/Caltex-logo-D8689DC9DE-seeklogo.com.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_of_Petron.svg/1200px-Logo_of_Petron.svg.png', 'http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png', 'https://play-lh.googleusercontent.com/-mPvZ31BeBu3teaLCN05MLhlCdfzGwIoQdFMgQkOGUoZ9aDBr7Um5suVCfWz0EBn4Q', 'https://1000logos.net/wp-content/uploads/2018/08/GEICO-Logo.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/1024px-Ford_Motor_Company_Logo.svg.png'];

      let random = Math.floor(Math.random() * brands.length);
      let rndom = Math.floor(Math.random() * img.length);
      var currentDate = new Date();

      const timeembed = {
        color: 0xADD8E6,
        title: `TIMECHECK: ${(currentDate.getHours()+8) + ":" + currentDate.getMinutes()}`,
        thumbnail: {
         url: img[rndom]
        },
        footer: {
          text: `THIS TIMECHECK IS BROUGHT TO YOU BY: ${brands[random].toUpperCase()}`, 
        },
       }
        message.channel.send({embed: timeembed});
      }
    }
