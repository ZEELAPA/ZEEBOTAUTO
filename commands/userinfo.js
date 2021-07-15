module.exports = {
    name: 'userinfo',
    aliases: ['ui'],
    description: "userinfo",
    execute(client, message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

        const userinfoEmbed = {
            color: 0xADD8E6,
            author: {
                name: 'USER INFO',
                icon_url: 'https://media.discordapp.net/attachments/823252853950775340/854508587149819934/e918cc70-6508-4e15-abed-0e823e34b9b2.png?width=112&height=112',
                url: 'https://discord.gg/dds',
            },
            fields: [
                {
                    name: `BOT?`, 
                    value: `${user.bot}`,
                    inline: true,
                },
                {
                    name: `JOINED AT`, 
                    value: `${user.joinedAt}`,
                    inline: true,
                },
                {
                    name: `CREATED AT`, 
                    value: `${user.createdAt}`,
                    inline: true,
                },
                {
                    name: `DISCRIMINATOR`, 
                    value: `${user.discriminator}`,
                    inline: true,
                },
                {
                    name: `ID`, 
                    value: `${user.id}`,
                    inline: true,
                },
                {
                    name: `PRESENCE`, 
                    value: `${user.presence.status}`,
                    inline: true,
                },
                {
                    name: `TAG`, 
                    value: `${user.tag}`,
                    inline: true,
                },
                {
                    name: `USERNAME`, 
                    value: `${user.username}`,
                    inline: true,
                },
                {
                    name: `SYSTEMED`, 
                    value: `${user.system}`,
                    inline: true,
                },
            ],
        };
        message.channel.send({ embed: userinfoEmbed });
        /* 
                let userinfo = {};
            userinfo.bot = message.client.user.bot;
            userinfo.createdat = message.client.user.createdAt;
            userinfo.discrim = message.client.user.discriminator;
            userinfo.id = message.client.user.id;
            userinfo.mfa = message.client.user.mfaEnabled;
            userinfo.pre = message.client.user.premium;
            userinfo.presen = message.client.user.presence;
            userinfo.tag = message.client.user.tag;
            userinfo.uname = message.client.user.username;
            userinfo.verified = message.client.user.verified;

            userinfo.avatar = message.client.user.avatarURL;

            var myInfo = new discord.RichEmbed()
                .setAuthor(userinfo.uname, userinfo.avatar)
                .addField("Bot?",userinfo.bot, true)
                .addField("Created At",userinfo.createdat, true)
                .addField("Discriminator",userinfo.discrim, true)
                .addField("Client ID",userinfo.id, true)
                .addField("2FA/MFA Enabled?",userinfo.mfa, true)
                .addField("Paid Account?",userinfo.pre, true)
                .addField("Presence",userinfo.presen, true)
                .addField("Client Tag",userinfo.tag, true)
                .addField("Username",userinfo.uname, true)
                .addField("Verified?",userinfo.verified, true)
                .setColor(0xf0e5da)
                .setFooter('s!aboutserver')
                .setTitle("About this user...")
                .setThumbnail(userinfo.avatar) */
    
    }
}