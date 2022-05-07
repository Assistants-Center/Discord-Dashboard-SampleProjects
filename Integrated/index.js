const {token} = require('./dbd_config');

const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const startDashboard = async () => {
    await require('./dashboard')({
        djs_client: client,
    });
}

client.login(token).then(()=>startDashboard());
