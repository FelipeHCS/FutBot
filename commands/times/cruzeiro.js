const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete();
    
    let embed0 = new Discord.MessageEmbed()
        .setColor('#4238ff')
        .setImage('https://logodetimes.com/wp-content/uploads/cruzeiro-capa.jpg')
        .addField('Classificação:','9º')
        .addField('Saldo de Gols:', '3')
        .addField('Último Jogo', 'Figueirense 0 x 1 Cruzeiro 16/08')
        .addField('Prox Jogo', 'Cruzeiro x Chapecoense 20/08')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed0);
        
}
module.exports = {
    name: "cruzeiro",
    execute,
}