const memory = require('../../lib/memory');
memory.startMemoryTrack();

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
    var i = 0;

    let ret = setInterval(() => {
        if (i === 100) {
            clearInterval(ret);
            console.log('node-persist, Average Memory Usage: ', Math.round(memory.getAverageMemoryUsage() / 1024 / 1024) + 'MB');
            process.exit();
        }

        storage.getItem(keys[i])
        i++;
    }, 100);
}).catch(error => {
    console.log(error);
});