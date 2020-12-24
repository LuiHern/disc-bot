const { Client, MessageEmbed, Guild } = require('discord.js');

const client = new Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
require("dotenv").config();

const makeGaymer = (member) => {
  member.roles.add('791760859474165760')
}


const discordBotToken = process.env.BOT_TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply('butt');
    console.log(msg.guild.members.cache.get('238314260499791872'))

  }
  if (msg.content === "trans") {
    msg.channel.send("rights");
  }
  if (msg.content === "cool") {
    msg.react("😎");
  }
  if (msg.content === 'fart') {
    msg.react('💩')
    // console.log(msg.member)
    // makeGaymer(msg.member)
    console.log(msg.member)
  }
});



client.on('message', message => {
  const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name);
  };
  // If the message is "how to embed"
  if (message.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      .setAuthor('Emma')
      // Set the title of the field
      .setTitle('How to embed')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
    // console.log(message.id)
    message.awaitReactions(filter, {max: 1, time: 60000, errors: ['time']})
      .then(collected => {
        console.log(collected.first().MessageReaction.message)
        const reaction = collected.first();

        if (ReactionEmoji.name === '👍🏼') {
          message.channel.send( 'reacted with a thumbs up');
        } else {
          message.channel.send('dumb');
        }
      })
      .catch(collected => {
        message.channel.send('you suck')
      })
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
	// When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}
  // Now the message has been cached and is fully available'
  // console.log(Guild.members.cache)
  // console.log(user.id)
  // console.log(client.fetchMember(user))

  if (reaction.message.id === '791798186263707660' && reaction.emoji.name === '👌') {

    
    makeGaymer()
  }



  // if (reaction.message.id === '791794568831565896' && reaction.emoji.name === '🥰') {
  //   makeGaymer(user.id)
  // }
  // console.log(user.id)
  // console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
	// The reaction is now also fully available and the properties will be reflected accurately:
	// console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});

//message id when creating new message
client.login(discordBotToken);
