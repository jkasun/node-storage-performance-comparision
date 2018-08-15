const memory = require('../../lib/memory');
memory.startMemoryTrack();

const valueGenerator = require('../../lib/valueGenerator');
let keys = valueGenerator.getKeys();

const Store = require('data-store');
const store = new Store('store', {
    path: './storage/data-store/storage.json' 
});
 
var i = 0;

let ret = setInterval(() => {
    if(i === 100) {
        clearInterval(ret);
        console.log('data-store, Average Memory Usage: ', Math.round(memory.getAverageMemoryUsage() / 1024 / 1024) + 'MB');
        process.exit();
    }

    store.get(keys[i]);
    i++;
}, 100)