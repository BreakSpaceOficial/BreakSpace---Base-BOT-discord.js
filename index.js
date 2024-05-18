require("dotenv").config();
const { Client, Partials} = require("discord.js");
const client = new Client({ intents: [
    "GuildMembers",
    "GuildMessages",
    "GuildModeration",
    "Guilds"
], partials: [Partials.GuildMember, Partials.User], });
require('./src/handler/comandos')(client)
require('./src/handler/eventos')(client)
client.login(process.env.bot_token);