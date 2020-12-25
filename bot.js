const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["CHANNEL", "REACTION", "MESSAGE"],
});
require("dotenv").config();
const { makeGaymer } = require("./helpers");
const { gaymerOn, gaymerOff, gaymerEmbed } = require("./ReactionRoles/gaymer");
const BOT_PREFIX = "!";

const discordBotToken = process.env.BOT_TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === `${BOT_PREFIX}ping`) {
    msg.reply("dick");
  }
  if (msg.content === `${BOT_PREFIX}trans`) {
    msg.channel.send("rights");
  }
  if (msg.content === `${BOT_PREFIX}cool`) {
    msg.react("😎");
  }
  if (msg.content === `${BOT_PREFIX}fart`) {
    msg.react("💩");
    makeGaymer(msg.member);
  }
});


gaymerEmbed(client)
gaymerOn(client);
gaymerOff(client);

client.login(discordBotToken);
