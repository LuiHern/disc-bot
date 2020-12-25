// await reaction.message.guild.members.cache.get(user.id).roles.add('role.id')
const Discord = require("discord.js");

let reactionMessageID = "";

const gaymerEmbed = (client) => {
  client.on("message", async (message) => {
    if (message.content === `!reactions`) {
      let embed = new Discord.MessageEmbed()
        .setTitle("ReactionRoles")
        .setAuthor("Lu")
        .setDescription("React to gain the role!")
        .setColor("GREEN");

      let msgEmbed = await message.channel.send(embed);
      msgEmbed.react("👍");
      console.log(msgEmbed.id);
      reactionMessageID = msgEmbed.id;
    }
  });
};

const gaymerOn = (client) => {
  client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.id === reactionMessageID) {
      if (reaction.emoji.name === "👍") {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.add("791760859474165760");
      }
    }
  });
};

// this stuff works
const gaymerOff = (client) => {
  client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;
    if (reaction.message.id === reactionMessageID) {
      if (reaction.emoji.name === "👍") {
        await reaction.message.guild.members.cache
          .get(user.id)
          .roles.remove("791760859474165760");
      }
    }
  });
};

module.exports = { gaymerOn, gaymerOff, gaymerEmbed };
