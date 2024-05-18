const fs = require("fs");
const path = require("path")
module.exports = async (client) => {
    const local = path.join('src/eventos')
    const categorias = fs.readdirSync(local)
    for (const categoria of categorias) {
        const eventos = fs.readdirSync(`${local}/${categoria}`)
        for (const evento of eventos) {
            const evt = await require(path.join(process.cwd(), `/${local}/${categoria}/${evento}`))
            if(evt.once) {
                client.once(evt.name, (...args) => evt.run(...args))
            } else {
                client.on(evt.name, (...args) => evt.run(...args));
            }
        }
    }
}