const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "ping",
    description: "Current ping",

    async run(message, args, client) {
       message.reply(`kire beta tor dekhi ${client.ws.ping} ms. ping`);

    }
});