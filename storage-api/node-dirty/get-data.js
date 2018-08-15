const valueGenerator = require('../../lib/valueGenerator');
let keys = valueGenerator.getKeys();

var dirty = require('dirty');
var db = dirty('./storage/dirty/storage.db');

db.on('load', () => {
    keys.forEach(key => {
        db.get(key);
        // console.log(db.get(key));
    })
});