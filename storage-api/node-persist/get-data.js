const valueGenerator = require('../../lib/valueGenerator');
let keys = valueGenerator.getKeys();

const storage = require('node-persist');

storage.init({
    dir: './storage/node-persist',
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8',
    logging: false,
    ttl: false,
    expiredInterval: 2 * 60 * 1000,
    forgiveParseErrors: false
}).then(()=>{
    keys.forEach(key => {
        storage.getItem(key).then((item) => {
            // console.log(item);
        });
    })
}).catch(error => {
    console.log(error);
});