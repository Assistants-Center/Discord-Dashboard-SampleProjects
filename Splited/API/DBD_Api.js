const DBD = require('discord-dashboard');
const {OAuth2Client,clientUrl,serverUrl,mongoUrl,port} = require("./dbd_config");

module.exports = async ({djs_client}) => {
    const Dashboard = new DBD.Dashboard({
        OAuth2Client,
        serverUrl,
        clientUrl,
        optionsReferences: {
            a: 'yes.', // accessible as 'optionsReferences.a' inside set and get value functions.
        },
        discordJSClient: djs_client,
        optionsFolder: `${__dirname}/DBD_Options`,
        tokenStore: new DBD.TokenStores.MongoStore(mongoUrl, 'DBD_Tokens'),
    });

    await Dashboard.createServer(port);
    return Dashboard;
}
