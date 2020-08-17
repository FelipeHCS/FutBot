const Discord = require("discord.js");
const dotenv = require("dotenv"); //Arquivos de pastas.
const fs = require("fs"); //Serve para ler os conteúdos.
const path = require("path"); //Puxar pastas.


dotenv.config();

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.queues = new Map();

const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js"));

const folders = fs.readdirSync(path.join(__dirname, "/commands"))
for (var folder of folders) {
    const files = fs.readdirSync(path.join(__dirname, "/commands", folder)).filter((filename) => /^.*\.(t|j)s$/.test(filename))
    for (var filename of files) {
        const command = require(`./commands/${folder}/${filename}`);
        bot.commands.set(command.name, command);
    }
}

for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}
console.log(bot.commands);

bot.on('ready', () => { //Iniciando o comando de Status do Bot.
    let activities = [ //Iniciando as atividades do Bot.
        `Digite f.help`,
        `Criado por Felipe Hilário #5995`
    ]
    i = 0;
    setInterval(() => bot.user.setActivity(`${activities[i++ %
        activities.length]}`, {
        type: "PLAYING"
    }), 1000 * 60); //Marcação do tempo para troca de Status

    console.log(`--------------------//inicializando//-----------------\n 
    ${bot.user.username} foi conectado com sucesso e já estamos em ${bot.guilds.cache.size} servidores ( ͡° ͜ʖ ͡°) \n 
    -----------------//iniciado com sucesso//-----------------`)
});


bot.on('message', (message) => {
    if (!message.content.toLowerCase().startsWith(process.env.BOT_PREFIX) || message.author.bot || message.channel.type == "dm") return;

    const args = message.content.toLowerCase().slice(process.env.BOT_PREFIX.length).split(" ");
    const command = args.shift();
    try {
        bot.commands.get(command).execute(bot, message, args);
    } catch (e) {
        return message.reply("não reconheço este comando :/");
    }
})

bot.login(process.env.BOT_TOKEN);