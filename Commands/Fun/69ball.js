var nball = ['of course you uneducated paperclip', 'of course not. I bet you eat Nintendo switch cartridges of fortnity-nite for breakfast', 'idk dude, btw i dont care, btw fuck u', 'ahh im 2much lazy 2 answer now, ask again later', 'dude idgaf, that question is a crap, i ll not respont it', 'OMG NO, OFC NO, R YA CRAZZZZZZYYYY?', 'hm? What? Sorry, I was too busy staring at that ugly mask of yours. Whats that? Its not a mask?']
module.exports = {
    name: '69ball',
    async execute(client, message, args) {
        message.channel.send(':8ball: ' + nball[Math.floor(Math.random() * nball.length)])
    console.log("[MSGAL] rolling the magic 69ball...")
    }
}