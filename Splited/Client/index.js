const DBD_Build = require("./DBD_BuildClient");
const {clientUrl, serverUrl} = require('./dbd_config');
(async ()=>{
    const path = await DBD_Build({
        websiteName: 'xd',
    });
    console.log(`FINISHED! Now publish build files somewhere to be accessible under ${clientUrl} and make sure the server is listening under ${serverUrl}.`);
})();
