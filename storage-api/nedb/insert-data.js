const valueGenerator = require('../../lib/valueGenerator');
let data = valueGenerator.generateData();

let Datastore = require('nedb');

let db = new Datastore({
    filename: './storage/nedb/storage.db',
    autoload: true,
    onload: () => {
        storeData();
    }
});

db.persistence.stopAutocompaction();

let storeData = () => {
    data.forEach(item => {
        db.insert(item);
    })

    db.persistence.compactDatafile();
};