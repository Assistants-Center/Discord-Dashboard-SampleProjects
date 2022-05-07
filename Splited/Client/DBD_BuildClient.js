const DBD_RC = require('discord-dashboard-reactclient');
const {OAuth2Client,clientUrl,serverUrl,} = require("./dbd_config");

module.exports = async (config) => {
    const ReactClient = new DBD_RC({
        ...OAuth2Client,
        clientUrl,
        serverUrl,
        ...config,
    });

    const path = await ReactClient.build();
    return path;
}
