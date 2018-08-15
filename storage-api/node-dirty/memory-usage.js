const memory = require('../../lib/memory');
memory.startMemoryTrack();

const valueGenerator = require('../../lib/valueGenerator');
let keys = valueGenerator.getKeys();

let dirty = require('dirty');
let db = dirty('./storage/dirty/storage.db');

db.on('load', () => {
    let i = 0;

    let ret = setInterval(() => {
        if (i === 100) {
            clearInterval(ret);
            console.log('node-dirty, Average Memory Usage: ', Math.round(memory.getAverageMemoryUsage() / 1024 / 1024) + 'MB');
            process.exit();
        }

        db.get(keys[i]);
        i++;
    }, 100)
});