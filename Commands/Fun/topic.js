var topics = ["What is your favorite animal?","What is your favorite color?","What is yor favorite number?","What is your favorite letter in the english alphabet?","What is your favorite type of food/drink?","What is your favorite SFW artist?","What is your favorite Movie?","What is your favorite thing to do?","What is your favorite Video Game?","What is your favorite Board game?","What is the craziest, most outrageous thing you want to achieve?","Have your parents influenced what goals you have?","What is a fashion trend you are really glad went away?","Do you play any musical instruments?","How do you get along with the people you work with?","What is your guilty pleasure?","What word or saying from the past do you think should come back?","What do you bring with you everywhere you go?","What is the most annoying habit someone can have?","What is the strangest dream you have ever had?","What did you dream in bed?","If you had intro music, what song would it be? Why?","Where in the world would you love to live most? Why?","What is your favorite Discord Bot?","What is your pets names?"]
var c = topics[Math.floor(Math.random() * topics.length)]
module.exports = {
    name: 'topic',
    async execute(client, message, args) {
      message.channel.send(c)
    }
}