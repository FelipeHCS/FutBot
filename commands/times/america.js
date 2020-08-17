const Discord = require("discord.js");
const execute = async (bot, message, args) => {
    message.delete();

    let embed0 = new Discord.MessageEmbed()
        .setColor('#00d346')
        .setImage('https://logodetimes.com/wp-content/uploads/america-mineiro-capa.jpg')
        .addField('Classificação:', '8º')
        .addField('Saldo de gols', '0')
        .addField('Último Jogo', 'Juventude x América 17/08')
        .addField('Prox Jogo', 'América x Oeste 21/08')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

    message.channel.send(embed0);

}
module.exports = {
    name: "america",
    execute,
}