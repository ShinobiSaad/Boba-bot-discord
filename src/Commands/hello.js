const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "kire",
    description: "Hello",

    async run(message, args, client) {
       message.reply("Kire beda");

    }
});