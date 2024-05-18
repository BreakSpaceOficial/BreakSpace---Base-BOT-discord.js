module.exports = {
    name: "interactionCreate",
    run: (interaction) => {
        const comandos = interaction.client.slashCommands.find(cmd => cmd.name === interaction.commandName)
        if(interaction.isCommand()) {
            comandos.run(interaction)
            return
        }
    }
}