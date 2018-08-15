const memory = require('../../lib/memory');
memory.startMemoryTrack();

const valueGenerator = require('../../lib/valueGenerator');
let keys = valueGenerator.getKeys();

let Datastore = require('nedb');

let db = new Datastore({
    filename: './storage/nedb/storage.db',
    autoload: true,
    onload: () => {
        var i = 0;

        let ret = setInterval(() => {
            if (i === 100) {
                clearInterval(ret);
                console.log('neDB, Average Memory Usage: ', Math.round(memory.getAverageMemoryUsage() / 1024 / 1024) + 'MB');
                process.exit();
            }

            db.findOne({ key: keys[i] }, (err, docs) => {
                // console.log(docs);
            })
            i++;
        }, 100)
    }
});