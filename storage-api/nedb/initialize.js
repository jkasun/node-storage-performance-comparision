let Datastore = require('nedb');

let db = new Datastore({
    filename: './storage/nedb/storage.db',
    autoload: true,
    onload: () => {
        process.exit();
    }
});