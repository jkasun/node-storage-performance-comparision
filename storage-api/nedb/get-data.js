const valueGenerator = require('../../lib/valueGenerator');
let keys = valueGenerator.getKeys();

let Datastore = require('nedb');

let db = new Datastore({
    filename: './storage/nedb/storage.db',
    autoload: true,
    onload: () => {
        keys.forEach(key => {
            db.findOne({key}, (err, docs) => {
                // console.log(docs);
            })
        });
    }
});