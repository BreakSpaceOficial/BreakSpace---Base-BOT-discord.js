const { Collection } = require("discord.js");
const fs = require("fs");
const path = require("path")
module.exports = async (client) => {
    client.slashCommands = new Collection()
    const slash = []
    const local = path.join('src/comandos')
    const categorias = fs.readdirSync(local)
    for (const categoria of categorias) {
        const comandos = fs.readdirSync(`${local}/${categoria}`)
        for (const comando of comandos) {
            const cmd = await require(path.join(process.cwd(), `/${local}/${categoria}/${comando}`))
            client.slashCommands.set(cmd.name, cmd)
            slash.push(cmd)
        }
    }
    client.on("ready", () => {
        client.application.commands.set(slash)
        console.log(`Comandos registrados`)
    })
}

// https://discordjs.guide/creating-your-bot/command-handling.html#loading-command-files