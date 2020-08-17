const Discord = require("discord.js");
const execute = async (bot, message, args) => {
    message.delete();

    let embed0 = new Discord.MessageEmbed()
        .setColor('#050000')
        .setImage('https://logodetimes.com/wp-content/uploads/atletico-mineiro-capa.jpg')
        .addField('Classificação:', '1º')
        .addField('Saldo de gols', '4')
        .addField('Último Jogo', 'Atlético 2 x 0 Ceará 16/08')
        .addField('Prox Jogo', 'Botafogo x Atlético 19/08')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

    message.channel.send(embed0);

}
module.exports = {
    name: "atletico",
    execute,
}