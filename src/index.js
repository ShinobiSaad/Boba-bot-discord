/** @format */

const Discord = require("discord.js");
const Client = require("./Structures/Client.js");
const Command = require("./Structures/Command.js");
const intents = new Discord.Intents(32767);
const config = require("./config/config.json");
const client = new Client();
const fs = require("fs");

fs.readdirSync("./src/Commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        /**
         * @type {Command}
         */
        const command = require(`./Commands/${file}`);
        console.log(`Command ${command.name} loaded`);
        client.commands.set(command.name, command);

});

 //Bot name bobba 

client.on("ready", () => console.log("boba is awake"));

client.on("messageCreate", message => {
    console.log(message.content);
    if (message.content == 'Michael') {
        message.reply("That's what she said")
    } else if (message.content == "hello") {
        message.reply("kire beta ki khobor")
    } else if (message.content == "hi") {
        message.reply("hi good man")
    } else if (message.content == "bolod") {
        message.reply("tui ultra bolod")
    } else if (message.content == "pagol") {
        message.reply("pa to shobari goal")
    } else if (message.content == "kire") {
        message.reply("KIREEEEEEEE!!!!")
    } else if (message.content == "GG") {
        message.reply("EZ")
    } else if (message.content == "gg") {
        message.reply("GG")
    } else if (message.content == "mara kha") {
        message.reply("no u")
    }
});

client.on("messageCreate", message => {
    
    if(!message.content.startsWith(config.prefix)) return;
    
    const args = message.content.substring(config.prefix.length).split(/ +/);

    switch (args[0]) {
        case "hello":
            message.reply("Outlaw Ops e shagotom");
            
            break;
        
        case "speak":
            message.reply(args.slice(1).join(" "));
            
            break;
    }

    const command = client.commands.find(cmd => cmd.name == args[0]);
    if (!command) return message.reply(`${args[0]} It's not a valid command`)
    command.run(message, args, client);
});

client.login(config.token);