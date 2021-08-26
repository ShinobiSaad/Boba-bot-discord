/** @format */

const Discord = require("discord.js");
const config = require("./config/config.json");
const intents = new Discord.Intents(32767);

const bobba = new Discord.Client({ intents }); //Bot name bobba

bobba.on("ready", () => console.log("Boba is awake"));

bobba.on("messageCreate", message => {
    console.log(message.content);
    if (message.content == 'Michael') { 
        message.reply("That's what she said")
    } else if (message.content == "hello") {
        message.reply("kire beta ki khobor")
    } else if (message.content == "hi") {
        message.reply("hi chodas ken")
    } else if (message.content == "bolod") {
        message.reply("tui ultra bolod")
    } else if (message.content == "pagol") {
        message.reply("pa to shobari goal")
    } else if (message.content == "kire") {
        message.reply("KIREEEEEEEE!!!!")
    } else if (message.content == "GG") {
        message.reply("EZ")
    } else if (message.content == "gg") {
        message.reply("GG chodas? Thabraya EZ banay felmu")
    } else if (message.content == "mara kha") {
        message.reply("Tui mara kha bolda")
    }
});

bobba.login(config.token);