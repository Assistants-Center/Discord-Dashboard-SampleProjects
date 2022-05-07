const {OptionTypes} = require('discord-dashboard');
let prefix = {};

const OptionSettings = {
    id: 'prefix',
    name: 'Prefix',
    description: 'Change bot prefix easily.',
    disabled: false,
    optionType: OptionTypes.TextInput({defaultValue: 'Hello, default value!',useEmojiPicker: true,
        allowGuildEmojis: true}),
    allowed: async ({guild_id, member_id, optionsReferences}) => {
        return true;
    },
    clientValidation: (value) => {
        if(value?.includes("1"))return {validated: false,error:"This option cannot include '1' character."};
        return {validated: true};
    },
    getValue: async ({guild_id, member_id, optionsReferences}) => {
        return prefix[guild_id] || '!';
    },
    setValue: async ({guild_id, member_id, newData, optionsReferences}) => {
        return {success: false, error: 'Niestety nie możesz zaaktualizować tej opcji :('};
        console.log('please update', `${guild_id}, ${newData}`);
        prefix[guild_id] = newData;
    },
};

module.exports = OptionSettings;
