const Discord = require ("discord.js")
const execute = async(bot, message, args) => {
    message.delete();

    let per0 = "Qual campeonato você deseja apostar?"
    let per1 = "Digite agora os placares, da seguinte forma: 1- Time A 0 X 0 Time B"
    let per2 = "Você está ciente que o valor de cada aposta será de R$ 2.500? Sim ou Não"

    message.channel.send(per0)
    let p1 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
        max: 1,
        time: 60000
    })

    p1.on("collect", async (msg) => { 
        message.channel.send(per1)
        let p2 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
            max: 1, 
            time: 600000
        })
        p2.on("collect", async () => {
            message.channel.send(per2)
            let p3 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {
                max: 1,
                time: 60000
            })
            p3.on("collect", async() => {
                let frase = ' **Sua aposta foi registrada com sucesso! 😜**'
                message.channel.send(frase)
                let embed = new Discord.MessageEmbed()
                .setColor('#e4b400')
                .setTitle('Nova Aposta')
                .addField('Campeonato:', p1.collected.first().content)
                .setDescription(p2.collected.first().content)
                .setTimestamp()
                .setFooter(message.author.username, message.author.displayAvatarURL())
                let piru = message.guild.channels.cache.get('744983006523162667').send(embed)
            })
        })
   
    })
    
}
module.exports = {
    name: "aposta",
    execute, 
}