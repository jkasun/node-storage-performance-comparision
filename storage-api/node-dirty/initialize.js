var dirty = require('dirty');
var db = dirty('./storage/dirty/storage.db');

db.on('load', () => {
    process.exit();
});