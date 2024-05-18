module.exports = {
    name: "ready",
    run: (client) => {
        console.log(`online ${client.user.username}`);
    }
}