const valueGenerator = require('../../lib/valueGenerator');
let keys = valueGenerator.getKeys();

const Store = require('data-store');
const store = new Store('store', {
    path: './storage/data-store/storage.json' 
});
 
keys.forEach(key => {
    store.get(key);
    // console.log(store.get(key));
})