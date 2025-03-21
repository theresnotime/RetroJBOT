const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')
const Discord = require('discord.js')
module.exports = {
    name: 'bogrant',
    async execute(client, message) {
      if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(':x: Error: No Admin!')
      return;
    }
    let idtoadd = message.content.slice(10)
    if (idtoadd === "") {
message.channel.send(":warning: Syntax error: `j.bogrant <#>`\nPlease try again.")
return
    }
    if (adminlist.admins.includes(idtoadd)) {
      message.channel.send(':x: Error: This admin already exists.');
      return;
    } else {
      adminlist.admins.push(idtoadd)
    }
    const embed = new Discord.MessageEmbed()
    .setColor('#ffff00')
    .setTitle('New account added to the admins list')
    .setDescription('ID added: '+message.content.slice(10)+'\n'+'Person that added this id: '+message.author.tag+"\n:warning: **IF YOU DO NOT KNOW THIS USER, REPORT IT TO THE ADMINS AND OWNER ASAP.**")
    .setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788949455876653078/vglitch.png')
    client.channels.cache.get('476209927128612864').send(embed)
    fs.writeFileSync("admins.txt", JSON.stringify(adminlist))
    message.channel.send(':heavy_check_mark: Success: Added admin id ' + message.content.slice(10) + ' to `admins.txt`');
    }
}