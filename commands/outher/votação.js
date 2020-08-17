const Discord = require("discord.js")
const execute = async (bot, message, args) => {
    message.delete();

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não tem permissão para utilizar este comando").then(m => m.delete(5000));

    let per1 = "Em qual canal será criada a votação? (Mencione com #)";
    let per2 = "Qual o conteúdo da votação?";
    let per3 = "Qual o título da votação?";

    let canal;
    message.channel.send(per1);
    let p1 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
        max: 1,
        time: 60000
    })

    p1.on("collect", async (msg) => {
        canal = msg.mentions.channels.first()
        message.channel.send(per2);
        let p2 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
            max: 1,
            time: 60000
        });

        p2.on("collect", async () => {
            message.channel.send(per3);
            let p3 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
                max: 1,
                time: 60000
            });
            p3.on("collect", async () => {

                let embed = new Discord.MessageEmbed()
                    .setColor('#e4b400')
                    .setTitle("Nova votação!")
                    .setDescription(p2.collected.first().content)
                    .setImage('https://media.giphy.com/media/S400Kpt4vDcQ9wbLix/giphy.gif')
                    .addField('Ajuda?','Caso precise de ajuda, mencione alguns dos cargos: <@&731272603767144478> | <@&677561965811335178> | <@&677570004148813826>')
                    .setTimestamp()
                    .setFooter(bot.user.username, bot.user.displayAvatarURL())
                    let piru = await message.guild.channels.cache.get(canal.id).send(embed)
                    await piru.react('✅')
            })
        })
    })
}
module.exports = {
    name: "votacao",
    execute,
}