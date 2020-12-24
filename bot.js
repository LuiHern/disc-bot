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
});

client.on("message", async message => {
  // Checking if the message author is a bot.
  if (message.author.bot) return false;

  // Getting the role by ID.
  const Role1 = message.guild.roles.cache.get("791760859474165760");

  // Creating a filter.
  const Filter = (reaction, user) => user.id == message.author.id;

  // Creating the embed message.
  const Embed = new discord.MessageEmbed()
      .setDescription(`Choose a role: ${Role1.name}`)
  
  // Awaiting for the embed message to be sent.
  const reactionMessage = await message.channel.send(Embed);

  // Reacting to the embed message.
  await reactionMessage.react("😎");

  // Awaiting a reaction to the embed message. Time is measured in ms. (30000 ms - 30 seconds)
  reactionMessage.awaitReactions(Filter, {max: 1, time: 30000, errors: ["time"]}).then(collected => {
      // Getting the first reaction in the collection.
      const reaction = collected.first();
      
      // Creating a switch statement for reaction.emoji.name.
      switch (reaction.emoji.name) {
          case "😎":
              // Checking if the member already has the role.
              if (message.member.roles.cache.has(Role1.id)) {return message.channel.send("You already have the role.")};
              // Adding the role.
              message.member.roles.add(Role1).then(message.channel.send("Role added!"));
              // Breaking the switch statement to make sure no other cases are executed.
              break
      }
  })
});
client.login(discordBotToken);
