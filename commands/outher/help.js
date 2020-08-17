const Discord = require ("discord.js");
const execute = async (bot, message, args) => {
    message.delete();
    
    let embed0 = new Discord.MessageEmbed()
        .setColor('#e4b400')
        .setTitle('Meus comandos:')
        .addField(`${process.env.BOT_PREFIX}Aposta`,'Inicia uma aposta')
        .addField(`${process.env.BOT_PREFIX}Cruzeiro`,'Mostra classificações e dados do Cruzeiro')
        .addField(`${process.env.BOT_PREFIX}Atletico`, 'Mostra classificações e dados do Atlético')
        .addField(`${process.env.BOT_PREFIX}America`, 'Mostra classificações e dados do América')
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())

        message.channel.send(embed0);
        
}
module.exports = {
    name: "help",
    execute,
}