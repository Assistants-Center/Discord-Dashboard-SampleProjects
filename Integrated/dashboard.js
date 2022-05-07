const DBD = require('discord-dashboard');
const DBD_RC = require('discord-dashboard-reactclient');
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

    const ReactClient = new DBD_RC({
        OAuth2Client,
        serverUrl,
        clientUrl,
        websiteName: 'Assistants Center',
    });

    Dashboard.integrateClient(ReactClient);
    await Dashboard.createServer(port);
    return Dashboard;
}
