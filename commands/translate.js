const translate = require('@iamtraction/google-translate');

module.exports = {
    name: 'translate',
    aliases: ['tl'],
    description: "translate command",
    async execute(client, message, args, translated){
     const tran = (args.slice(0).join(' '));
     const trans = await translate(tran, {to : 'en'});

     message.channel.send(`TRANSLATION: ${trans.text.toUpperCase()}`);

    }
}
     /* const transEmbed = {
       color: 0xADD8E6,
       title: `"${trans.text}"`,
       author:{
         name: `${tran} TRANSLATED:`
       }
     };
     
     message.channel.send({embed: transEmbed}); */
     /* const query = (args.slice(0).join(' '));
     if(!query) return message.channel.send('WEWS WALANG LAMAN');

     const translated = await translate(query, { to : 'en' });
     message.channel.send(translated) */


