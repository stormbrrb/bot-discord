const Discord = require("discord.js"); //requer o pacote js
const client = new Discord.Client();//deixar o bot on
const config = require("./config.json"); //importação dos comandds da config json
const prefix ="!"; 
const commands = commands.reader("/scripts/commandsreader.js")

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size}
   usuários,canais, em ${client.guilds.size} servidores.`); 
 // client.user.setPresence({ game: { name: 'comando', type: 2 :"coronavírus"} });
});
const args = msg.content.split(" ");
  if (commands[args[0]])

client.login(config.token);