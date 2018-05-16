exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    .setTitle("Ping")
    .setDescription("loading...")
    .setColor(0x00ff00)
  const msg = message.channel.send({ embed }).then(m => {
  const em = new Discord.RichEmbed()
    .setTitle("PoIIIING!")
    .setDescription(`Bot Latency: ${msg.createdTimestamp - message.createdTimestamp}ms\nAPI Latency: ${Math.round(client.ping)}ms`)
    .setColor(0x00ff00)
    .setAuthor(`Sent by ${message.author.username}`, message.author.displayAvatarURL);
  m.edit(embed);
  });
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pong"],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Utility",
  description: "Get the bot\'s lanency.",
  usage: "ping"
};
