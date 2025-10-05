const db = require("quick.db")
const config = require('../config')
const Discord = require('discord.js')
const rlog = new db.table("raidlog")
const wl = new db.table("Whitelist")
const p = new db.table("Prefix")

module.exports = {
    name: "messageCreate",

    async execute(client, message) {

        if (message.author.bot) return
        if (message.channel.type == "DM") return

        let pf = p.fetch(`prefix_${message.guild.id}`)
        if (pf == null) pf = config.bot.prefixe

        const args = message.content.slice(pf.length).trim().split(' ')
        const commandName = args.shift().toLowerCase()
        const command = client.commands.get(commandName)

        if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`)))
            message.channel.send("wech lekip")

        if (message.content.toLowerCase().includes("labubu")) {
    return message.channel.send("ON T'AIME TOUS NOTRE CHEF LABUBU!!");
}


        if (!message.content.startsWith(pf) || message.author.bot) return
        if (!command) return

            command.execute(client, message, args)

    }
}
