const Discord = require("discord.js");
const client = new Discord.Client();
const chatData = require("./chatdata");

client.on('ready', async () => {
  console.log(`${client.user.tag} is online!`)
})

client.on('messageCreate', async (message) => {
  if(message.author.bot) return; // ignore the bot messages...
      // Iterate over each message in the chatData array and check if the user's message matches any of the message strings
      for (const chat of chatData) {
        if (chat.messages.includes(message.content.toLowerCase())) {
          //send a random response from the responses array
          const response = chat.responses[Math.floor(Math.random() * chat.responses.length)];
          message.reply(response);
          return;
        }
      }
      // default response
      message.reply('Sorry I don\'t understand what you said...')
});
client.login('YOUR_DISCORD_BOT_TOKEN') // replace with your... use secret environment for safety!
