const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const discordBotToken = process.env.BOT_TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("dick");
  }
  if (msg.content === "trans") {
    msg.channel.send("rights");
  }
  if (msg.content === "cool") {
    msg.react("😎");
  }
  if (msg.content === 'fart') {
    msg.react('💩')
  }
});


client.login(discordBotToken);
