const valueGenerator = require('../../lib/valueGenerator');
let data = valueGenerator.generateData();

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
    data.forEach(item => {
        storage.setItem(item.key, item.value).then().catch(err => {
            console.log(err)
        });
    })
}).catch(error => {
    console.log(error);
});