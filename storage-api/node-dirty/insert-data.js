const valueGenerator = require('../../lib/valueGenerator');
let data = valueGenerator.generateData();

var dirty = require('dirty');
var db = dirty('./storage/dirty/storage.db');

db.on('load', function () {
    data.forEach((item) => {
        db.set(item.key, item.value);
    });

    // db.forEach(function (key, val) {
    //     console.log('Found key: %s, val: %j', key, val);
    // });
});

db.on('drain', () => {
});