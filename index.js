// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('in JS.', {type: 'PLAYING'});
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') {
        return msg.channel.send('https://git.io/d.js-heroku');
    }
    if (command === 'invite') {
        return msg.channel.send(process.env.INVITE);
    }
    if (command === "uptime") {
        return msg.channel.send(`I've been up for ${handleUptime()}!`);
    }
});

client.login(process.env.TOKEN);

// Code by Ice#1234
function handleUptime() {
    let uptime = "";
    let seconds = Math.floor(process.uptime());
    const days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    const hrs = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    if (days > 0) {
        if (days > 1) {
            uptime += `${days} days, `;
        } else {
            uptime += `${days} day, `;
        }
    } else { uptime += ""; }

    if (hrs > 0) {
        if (hrs > 1) {
            uptime += `${hrs} hours, `;
        } else {
            uptime += `${hrs} hour, `;
        }
    } else { uptime += ""; }

    if (minutes > 0) {
        if (minutes > 1) {
            uptime += `${minutes} minutes, and `;
        } else {
            uptime += `${minutes} minute, and `;
        }
    } else { uptime += ""; }

    if (seconds > 1) {
        uptime += `${seconds} seconds`;
    } else {
        uptime += `${seconds} second`;
    }

    return uptime;
}
