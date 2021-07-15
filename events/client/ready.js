module.exports = async (Discord, client) => {
    console.log('ZEEBOT Is Online!');

    client.user.setPresence({
      status: "online", 
      activity: {
        name: `GTA VI`,
        type: "PLAYING",
        largeImageKey: 'http://vignette1.wikia.nocookie.net/fantendo/images/6/68/GTAVI.png/revision/latest?cb=20131024180849'
      }
    })
}