const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
// key here
client.login('');

client.on('ready', () => {
	client.user.setActivity('with /help (by Diby)', { type: 'PLAYING' });
});

client.on('message', message => {
	if (message.content === '/mute') {
		if (message.member.voice.channel) {
			const channel = message.guild.channels.cache.get(message.member.voice.channel.id);
			for (const [, member] of channel.members) {
			// if (member != message.member)
				member.voice.setMute(true);
			}
			message.channel.send('Members have been muted. Type /unmute to unmute.');
		}
		else {
			message.reply('you need to join a voice channel first!');
		}
	}

	else if (message.content === '/unmute') {
		if (message.member.voice.channel) {
			const channel = message.guild.channels.cache.get(message.member.voice.channel.id);
			for (const [, member] of channel.members) {
			// if (member != message.member)
				member.voice.setMute(false);
			}
			message.channel.send('Members have been unmuted.');
		}
		else {
			message.reply('you need to join a voice channel first!');
		}
	}

	else if (message.content === '/help') {
		message.channel.send('Mute All: /mute');
		message.channel.send('Unmute All: /unmute');
	}
});