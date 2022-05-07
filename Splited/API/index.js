const {token} = require('./dbd_config');

const {Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const startDashboardAPI = async () => {
    await require('./DBD_Api')({
        djs_client: client,
    });
}

client.login(token).then(()=>startDashboardAPI());
