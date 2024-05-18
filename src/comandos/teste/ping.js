const { PermissionsBitField } = require("discord.js");

module.exports = {
    name: "ping",
    description: "[]",
    run: async (interaction) => {

        if (interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
            console.log('This member can kick');
        }
        


        const ping = interaction.client.ws.ping
        const uptime = Math.floor(Date.now(interaction.client.uptime) / 1000);
        interaction.reply({
            ephemeral: true,
            content: `Meu ping é ${ping}\nEstou online <t:${uptime}:R>`
        })
    }
}